# apex 修复操作手册（用户手动执行）

**目的**: 把 `fenix-sanyamed.com` 变成 HTTPS 200，CNAME flattening 通过 Cloudflare。
**预计时间**: 30 分钟操作 + 24–48 小时 DNS 传播。
**风险**: 极低（全程有 www 兜底，apex 当前本就不能用）。

---

## 你需要准备的 4 样东西

1. **Cloudflare 账号**（有 fenix-sanyamed.com Pages 项目 + `www.fenix-sanyamed.com` 已 active）
2. **Hostinger 账号**（域名 fenix-sanyamed.com 是在 Hostinger 买的）
3. **可访问 Cloudflare Dashboard**（浏览器）
4. **可访问 Hostinger hPanel**（浏览器）

不需要：服务器、不需要 Cloudflare API token（这次用 Dashboard 走流程）。

---

## 整个流程 4 步

### 第 1 步：Cloudflare 端 — 把 apex 添加为站点（5 分钟）

> ⚠️ 之前直接在 Pages 项目里加 apex 失败了。这次不同 — 我们**先把 apex 加成 Cloudflare 自己的 DNS zone**，让 Cloudflare 成为权威 DNS。Pages 再去绑定这个 zone 的 apex 就好办了。

1. 打开 https://dash.cloudflare.com → 左侧 **Add a site**
2. 输入 `fenix-sanyamed.com` → 选 **Free** 计划
3. Cloudflare 会扫一遍现有 DNS 记录 → 一路点 **Next** 让它自动导入
4. ⚠️ 关键页：选 **Free** + 不要勾选任何付费功能 → **Continue**
5. Cloudflare 会给你 **两个 NS 地址**，形如：
   ```
   elsa.ns.cloudflare.com
   ivan.ns.cloudflare.com
   ```
   **复制保存这两个 NS 字符串** —— 第 2 步要用。

> 如果 Cloudflare 提示"domain already in our system"：说明以前加过。在 Sites 列表找一下，要么复用，要么联系支持合并。

### 第 2 步：Hostinger 端 — 把 NS 改成 Cloudflare 给的（5 分钟）

> 这是最关键的一步。改 NS 后，所有 DNS 查询都走 Cloudflare。

1. 打开 https://hpanel.hostinger.com
2. 左侧 **Domains** → 点 `fenix-sanyamed.com`
3. 找 **Nameservers** / **DNS servers** / **Name Server** 设置
4. 当前是 Hostinger 默认的（类似 `ns1.dns-parking.com` / `apollo.dns-parking.com`）
5. 改成 **Custom nameservers**（或"其他"/"自定"），填入第 1 步拿到的两个 Cloudflare NS：
   ```
   elsa.ns.cloudflare.com
   ivan.ns.cloudflare.com
   ```
   （用 Cloudflare 实际给你的，不要直接抄这个）
6. 保存

> ⚠️ 关键：填完**先点验证 / 确认**，看到绿色 ✓ 才算成功。有些版本要求填 2 个以上，2 个够。

### 第 3 步：等 + 验证（24-48 小时，但通常 30 分钟就生效）

1. 打开 https://dnschecker.org → 输入 `fenix-sanyamed.com` 选 **NS** 记录
2. 看全球各地是否变成 Cloudflare 的 NS（不同国家可能逐步切换）
3. 当全球 80% 以上都变 Cloudflare NS 之后，Cloudflare Dashboard 会自动发邮件 "Active" / "Status: Active"

**期间不要做任何事**。如果 24h 还没全切换，去 Hostinger 再检查 NS 设置没填错。

> ⚠️ **DNS 传播期间不要**：
> - 不要删除 Hostinger 上的 DNS 记录（Cloudflare 接管后会自动清，但过渡期别动）
> - 不要在 Cloudflare 改 A / CNAME 记录
> - 不要取消 Cloudflare zone

### 第 4 步：Cloudflare 接管后 —— 把 apex 绑回 Pages（5 分钟）

NS 切完后做这几件事：

#### 4a. 在 Cloudflare DNS 里加 CNAME flattening

1. Cloudflare Dashboard → 你的域 `fenix-sanyamed.com` → **DNS** → **Records**
2. 检查现有 `@` 记录：
   - 如果有 `A 172.67.71.99` → **删掉**
   - 如果有 `CNAME @ fenix-sanyamed.pages.dev` → 不用动（这就是 flattening）
   - 如果有 `ALIAS` 记录 → **删掉**（Cloudflare 自动做 flattening，不需要）
3. 添加新记录：
   - Type: **CNAME**
   - Name: **@**
   - Target: `fenix-sanyamed.pages.dev`
   - Proxy: **DNS only**（灰云关掉 = 不走代理；Cloudflare 的 CNAME flattening 不需要代理，Pages 域不要走代理）
   - Save

#### 4b. 把 apex 加回 Pages 项目

1. Cloudflare Dashboard → 左侧 **Workers & Pages** → 项目 `fenix-sanyamed`
2. 标签 **Custom domains** → **Set up a custom domain**
3. 输入 `fenix-sanyamed.com` → **Continue**
4. Cloudflare 会自动检测到 apex 的 CNAME flattening 指向 `pages.dev` → **激活**
5. 等待 5-30 分钟，SSL 证书签发后，状态变成 **Active**

#### 4c. 设置 301 重定向（可选但建议）

让 apex 自动跳到 www：
1. Cloudflare Dashboard → 域 `fenix-sanyamed.com` → **Rules** → **Redirect Rules**
2. **Create rule**：
   - Name: `apex → www`
   - Match: `Hostname = fenix-sanyamed.com`
   - Action: **301 Permanent Redirect**
   - URL: `https://www.fenix-sanyamed.com/${1}`（`${1}` 是原 URL path/query）
3. Save

> 如果你**想让 apex 直接当主站**（不跳 www）—— 跳过这步。

---

## 验证清单（每步独立验证）

| 时间点 | 检查 | 命令/方法 |
|---|---|---|
| 第 2 步后 | Hostinger 状态显示 Custom NS | hPanel 截图 |
| 第 3 步后 | Cloudflare 邮件收到 Active | 邮箱 |
| 第 4a 后 | Cloudflare DNS 列表有 `@ CNAME fenix-sanyamed.pages.dev` | Cloudflare Dashboard |
| 第 4b 后 | Pages Custom domains 显示 `fenix-sanyamed.com → Active` | Cloudflare Dashboard |
| 第 4c 后 | `curl -I https://fenix-sanyamed.com/` 返回 `301 Location: https://www.fenix-sanyamed.com/` | 浏览器或 curl |

---

## 出问题时的回滚

| 现象 | 解决 |
|---|---|
| NS 改了但 Cloudflare 一直不显示 Active | Hostinger 后台确认 NS 没拼写错；等 24h |
| Cloudflare 接管后网站打不开 | Pages → Custom domains 检查；DNS 列表确认 `fenix-sanyamed.pages.dev` 在 |
| apex 打开 525 错误 | 重新走 4a — CNAME 一定要是 `fenix-sanyamed.pages.dev` 完整名（结尾有点或没点都行） |
| 想撤销 | Hostinger 把 NS 改回原来的 `ns1.dns-parking.com` / `apollo.dns-parking.com`，等 24h |

---

## 完成后告诉我的事情

把以下截图/文本发给我，我做自动校验：

1. **Cloudflare DNS 列表截图**（确认 apex 有 CNAME 记录）
2. **Pages Custom domains 状态截图**（确认 Active）
3. **`nslookup fenix-sanyamed.com` 完整输出**（powershell / cmd 里跑）

收到后我会自动：
- 把 daily_yandex_health 里的 known_issues 那条**手动改成"resolved"**
- 让 every4h_yandex_recovery.py **不再尝试 re-add apex**
- 跑一次完整 health check 确认全绿
- 在 memory 里记下 "apex 已修复"

---

## 时间线预估

| 步骤 | 操作时间 | 等待时间 |
|---|---|---|
| 1. Cloudflare add site | 5 min | — |
| 2. Hostinger 改 NS | 5 min | — |
| 3. 等 DNS 传播 | — | **30 min ~ 48h**（多数 30 min 内生效） |
| 4a. 加 CNAME | 2 min | — |
| 4b. Pages 绑 apex | 5 min | 5-30 min SSL 签发 |
| 4c. 设置 301 | 2 min | — |
| 验证 | 5 min | — |

**总时间：操作 25 min + 等待 30 min ~ 48 h**

---

## 不做的 3 件事

1. **不要**在 Cloudflare NS 改之前就把 apex 删 Pages 项目 —— 会有几分钟断网
2. **不要**用 `dig` 或 `nslookup` 立刻检查 apex —— NS 没传播完之前会假阴性
3. **不要**改 Hostinger 上 apex 的 A 记录（Cloudflare 接管后会自己清掉）
