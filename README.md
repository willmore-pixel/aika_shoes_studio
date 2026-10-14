# Aika Shoes Studio

鞋子配色工作室網站。

- **新增色卡**：把照片上傳到 `swatches/leather`（皮革）或 `swatches/canvas`（帆布印花）。檔名就是客人看到的名稱。上傳後約 1–2 分鐘網站自動更新。
- **刪除色卡**：在 GitHub 上刪掉那張照片即可。
- 網站本體是 `index.html`；`scripts/build.py` 會在每次上傳後自動裁切照片並產生色卡清單。
