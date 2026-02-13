# 🚀 Hosting & Dynamic Blog Setup Guide

## Part 1: Connecting GitHub to Hostinger (One-Time Setup)

To make the auto-deployment work, you need to give GitHub permission to upload files to your Hostinger account.

### 1. Get FTP Details from Hostinger
1. Log in to **Hostinger hPanel**.
2. Go to **Files** > **FTP Accounts**.
3. Note down:
   - **FTP IP/Hostname** (e.g., `ftp.yourdomain.com` or an IP address)
   - **FTP Username** (e.g., `u123456789`)
   - **FTP Password** (You may need to change/reset this if you don't know it)

### 2. Add Secrets to GitHub
1. Go to your **GitHub Repository**.
2. Click **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret**.
4. Add the following 3 secrets (names must be EXACT):

| Name | Secret (Value) |
|------|---------------|
| `FTP_SERVER` | Your Hostinger FTP Hostname (e.g., `ftp.yourdomain.com`) |
| `FTP_USERNAME` | Your Hostinger FTP Username |
| `FTP_PASSWORD` | Your Hostinger FTP Password |

### 3. Deploy!
- Make any change to your code.
- Push to GitHub: `git push origin main`.
- Go to the **Actions** tab in GitHub to watch it build and upload live!

---

## Part 2: Making the Blog Dynamic (Host-Only Access)

To allow only YOU (the Host) to post blogs without editing code, we need a **Database** and **Authentication**.

**Recommended Stack (Best Performance on Hostinger):**
- **Frontend**: React (Already built)
- **Backend/DB**: **Supabase** (Free, secure, and easier than setting up MySQL/PHP manually)

### Why Supabase?
It serves as a "backend-as-a-service". You don't need to host a server. React talks directly to Supabase securely.

### Implementation Plan (Next Steps)
1.  **Create a Supabase Project** (Free).
2.  **Create a 'Posts' Table** with columns: `title`, `content`, `image_url`, `created_at`.
3.  **Enable Authentication**: Allow login via Email/Password (Admin only).
4.  **Create an Admin Page (`/admin`)** in React:
    - Protected route (redirects to login if not authenticated).
    - Contains a form to write blogs.
    - Uploads images to Supabase Storage.
5.  **Update Home Page**: Fetch posts from Supabase instead of the hardcoded array.

**Would you like me to start setting up the React code for the Admin/Supabase connection?**
