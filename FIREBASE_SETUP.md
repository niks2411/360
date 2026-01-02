# Firebase Setup Instructions

Follow these steps to complete the Firebase integration for your contact form.

## Step 1: Create a Firebase Project (5 minutes)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter a project name (e.g., "XD Media Contact")
4. Click **Continue**
5. Disable Google Analytics (optional) or configure it
6. Click **Create project**
7. Wait for the project to be created, then click **Continue**

## Step 2: Enable Firestore Database (2 minutes)

1. In your Firebase project, click **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. Select **"Start in production mode"** (we'll add security rules later)
4. Click **Next**
5. Choose your Firestore location (select the one closest to your users)
6. Click **Enable**

## Step 3: Get Firebase Configuration (2 minutes)

1. In Firebase Console, click the **gear icon** ⚙️ next to "Project Overview"
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **Web icon** `</>`
5. Enter an app nickname (e.g., "XD Media Web")
6. **DO NOT** check "Also set up Firebase Hosting"
7. Click **"Register app"**
8. You'll see a `firebaseConfig` object with your credentials

## Step 4: Add Credentials to .env File (2 minutes)

1. In your project root (`c:\Users\Nikhil\Desktop\xdmedia`), create a file named `.env`
2. Copy the contents from `.env.example` and fill in your Firebase credentials:

```env
# Firebase Configuration
REACT_APP_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789012
REACT_APP_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890

# Admin Password (choose a strong password)
REACT_APP_ADMIN_PASSWORD=YourSecureAdminPassword123!
```

**Important:** Replace all the placeholder values with your actual Firebase credentials from Step 3.

## Step 5: Configure Firestore Security Rules (2 minutes)

1. In Firebase Console, go to **"Firestore Database"**
2. Click the **"Rules"** tab
3. Replace the existing rules with the following:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to create new contacts (for the contact form)
    match /contacts/{contactId} {
      allow create: if true;
      
      // Only allow reading, updating, and deleting from authenticated admin
      // In production, you should implement proper Firebase Authentication
      allow read, update, delete: if true;
    }
  }
}
```

4. Click **"Publish"**

**Note:** These rules allow anyone to submit the contact form and read/manage contacts. For production, you should implement proper Firebase Authentication for the admin panel.

## Step 6: Add .env to .gitignore (1 minute)

Make sure your `.env` file is listed in `.gitignore` to prevent committing sensitive credentials:

1. Open `.gitignore` in your project root
2. Add this line if not already present:
```
.env
```

## Step 7: Restart Development Server

After adding the `.env` file, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm start
```

## Testing the Setup

1. **Test Contact Form:**
   - Go to `http://localhost:3000/contact`
   - Fill out and submit the form
   - Check Firebase Console > Firestore Database to see the new entry

2. **Test Admin Dashboard:**
   - Go to `http://localhost:3000/admin`
   - Enter the password you set in `.env`
   - You should see the contact submission you just created

## Troubleshooting

### "Firebase: Error (auth/invalid-api-key)"
- Double-check your `REACT_APP_FIREBASE_API_KEY` in `.env`
- Make sure there are no extra spaces or quotes

### "Permission denied" errors
- Verify your Firestore security rules are published
- Check that the rules allow `create: if true` for contacts

### Admin password not working
- Make sure you restarted the dev server after creating `.env`
- Check that `REACT_APP_ADMIN_PASSWORD` matches what you're typing

### Contact form not saving
- Open browser console (F12) to check for errors
- Verify all Firebase credentials are correct in `.env`
- Check Firebase Console > Firestore Database for any error messages

## Production Deployment

When deploying to production:

1. Add environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Implement proper Firebase Authentication for the admin panel
3. Update Firestore security rules to use Firebase Auth
4. Consider adding rate limiting to prevent spam submissions

## Need Help?

If you encounter any issues, check:
- Firebase Console for error messages
- Browser console (F12) for JavaScript errors
- Make sure all environment variables are set correctly
