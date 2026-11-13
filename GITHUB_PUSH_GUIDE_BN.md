# GitHub-এ Repository Push করার বাংলা নির্দেশনা

এই ZIP-এ তোমার আটটি learning module, ৪০০টি problem-solving exercise, JavaScript projects এবং updated Ostad Learning Tracker একসঙ্গে সাজানো হয়েছে।

## ১ — Backup এবং Extract

1. তোমার বর্তমান repository folder-এর একটি backup রাখো।
2. ZIP Extract করো।
3. Extract করা `AI-Driven-Full-Stack-Web-Developer-with-MERN` folder-এর ভেতরের সব file/folder তোমার আগের local repository root-এ copy/merge করো।
4. Replace চাইলে updated files replace করবে।

**খুব গুরুত্বপূর্ণ:** আগের repository-এর hidden `.git` folder delete করবে না। এই ZIP-এ `.git` রাখা হয়নি, যাতে তোমার existing Git history এবং remote connection নিরাপদ থাকে।

## ২ — VS Code-এ সঠিক folder খোলো

VS Code → File → Open Folder → তোমার আগের repository root folder নির্বাচন করো। তারপর Terminal → New Terminal খুলে চালাও:

```powershell
git status
git remote -v
git branch --show-current
```

`git remote -v`-তে এই repository URL দেখা উচিত:

```text
https://github.com/anik339/AI-Driven-Full-Stack-Web-Developer-with-MERN.git
```

## ৩ — Push-এর আগে পরীক্ষা

```powershell
git diff --check
git status --short
git add .
git diff --cached --check
git status --short
```

Staged changes দেখে নিশ্চিত হও যে কোনো `.env`, password, API secret, `node_modules` বা ব্যক্তিগত ফাইল commit হচ্ছে না।

## ৪ — Commit ও Push

```powershell
git commit -m "Complete eight learning modules and add 400 practice problems"
git push origin main
```

যদি `git branch --show-current`-এ `master` দেখায়, তাহলে `git push origin master` ব্যবহার করবে।

## ৫ — GitHub-এ যাচাই

Push-এর পরে repository refresh করে দেখো:

- Root `README.md` এবং `index.html` দেখা যাচ্ছে কি না।
- `Ostad_Learning_Tracker/index.html` আছে কি না।
- Module 01–08 আটটি folder আছে কি না।
- `Problem-Solving`-এ আটটি module set এবং প্রতিটিতে ৫০টি problem folder আছে কি না।
- Module 06, 07 ও 08-এর JavaScript project hub আছে কি না।
- `Assignment/index.html` এবং `GITHUB_PUSH_GUIDE_BN.md` আছে কি না।

## Error হলে

কোনো command error দিলে error text কপি করে পাঠাবে। Error না বুঝে `.git` delete করবে না, `git init` চালাবে না এবং force push করবে না।
