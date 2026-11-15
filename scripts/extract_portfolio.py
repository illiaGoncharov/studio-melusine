#!/usr/bin/env python3
"""Извлекает каталог проектов и JPEG из Studio Melusiné.html."""
import base64
import json
import re
import re as re_mod
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "Studio Melusiné.html"
MEDIA = ROOT / "public" / "media"
OUT = ROOT / "src" / "data" / "_portfolio.generated.json"


def slug(title: str) -> str:
    s = re_mod.sub(r"[^a-zA-Z0-9]+", "-", title.lower()).strip("-")
    return s[:48] or "project"


def parse_d_array(line: str) -> list:
    start = line.find("[")
    depth = 0
    in_str = False
    esc = False
    end = None
    for j, ch in enumerate(line[start:], start=start):
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == '"':
                in_str = False
            continue
        if ch == '"':
            in_str = True
        elif ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                end = j
                break
    return json.loads(line[start : end + 1])


def save_data_uri(uri: str, path: Path) -> None:
    if not uri.startswith("data:"):
        return
    header, b64 = uri.split(",", 1)
    ext = "jpg"
    if "png" in header:
        ext = "png"
    elif "webp" in header:
        ext = "webp"
    path.parent.mkdir(parents=True, exist_ok=True)
    final = path.with_suffix(f".{ext}")
    final.write_bytes(base64.b64decode(b64))
    return str(final.relative_to(ROOT / "public")).replace("\\", "/")


def main() -> None:
    lines = HTML.read_text(encoding="utf-8").splitlines()
    data_line = lines[164]
    data = parse_d_array(data_line)

    for cat in data:
        for proj in cat.get("projects", []):
            cat_id = cat["id"]
            pslug = slug(proj["title"])
            imgs_out = []
            for i, img in enumerate(proj.get("imgs") or []):
                if img.startswith("data:"):
                    rel = save_data_uri(
                        img,
                        MEDIA / cat_id / pslug / f"{i}",
                    )
                    imgs_out.append(f"/{rel}")
                else:
                    imgs_out.append(img)
            proj["imgs"] = imgs_out
            vid = proj.get("video")
            if isinstance(vid, str) and vid.startswith("data:"):
                rel = save_data_uri(vid, MEDIA / cat_id / pslug / "video")
                proj["video"] = f"/{rel}"
            elif isinstance(vid, str) and vid.startswith("/_blob/"):
                proj["video"] = "/media/stage/the-nude-party-show/video.mp4"

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {OUT}, categories={len(data)}")


if __name__ == "__main__":
    main()