# Kelson's Portfolio Website

My personal portfolio site built with React. Live at [kelsonflint.com](https://kelsonflint.com)

## Quick Start (New Computer Setup)

If you're setting this up on a new machine:

1. **Install Node.js** (if not installed):
   ```bash
   brew install node
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

   Your site will open at http://localhost:3000 and auto-reload when you make changes.

## Common Tasks

### Making Content Changes

Most of the content you'll want to update lives in these files:

- **Main hero section**: `src/components/HeroSection.jsx`
- **Diamond Dawg Games section**: `src/components/GameCompanySection.jsx`
- **About me section**: `src/components/AboutMe.jsx`
- **Life & hobbies section**: `src/components/LifeSection.jsx`
- **Navigation menu**: `src/components/navbar.jsx`
- **Blog posts**: `src/components/blogs/`

### Updating Diamond Dawg Games

To update your game company section (found at `src/components/GameCompanySection.jsx`):

1. **Add/edit game information**: Modify the `games` array (lines 5-25)
2. **Update app store links**: Replace the `#` placeholders with actual App Store/Play Store URLs:
   ```javascript
   appStoreLink: "https://apps.apple.com/...",
   playStoreLink: "https://play.google.com/...",
   ```
3. **Change company tagline**: Edit line 34
4. **Update website link**: Change `https://diamonddawg.games` throughout the file

### Adding a New Blog Post

1. Create a new file in `src/components/blogs/YourBlogName.jsx`
2. Copy the structure from an existing blog like `Anime.jsx` or `Travel.jsx`
3. Add a route in `src/App.js` (around line 41-46):
   ```javascript
   <Route path="/blog/your-topic" element={<YourBlogName />} />
   ```
4. Add a card in `src/components/LifeSection.jsx` to link to it

### Deploying to GitHub Pages

After making changes and committing them:

```bash
npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch, updating your live site at kelsonflint.com.

### Testing Before Deploying

Always test locally first:

1. Save your changes
2. Check http://localhost:3000 in your browser
3. Make sure everything looks good
4. Then run `npm run deploy`

## File Structure

```
src/
├── components/
│   ├── HeroSection.jsx       # Main landing section
│   ├── AboutMe.jsx           # About section
│   ├── LifeSection.jsx       # Hobby cards grid
│   ├── navbar.jsx            # Navigation bar
│   ├── StarryBackground.jsx  # Animated background
│   └── blogs/                # All blog post components
├── style/                    # CSS files
├── App.js                    # Main app routes
└── index.js                  # Entry point
```

## Troubleshooting

**Site won't start?**
- Make sure you ran `npm install` first
- Try deleting `node_modules` and running `npm install` again

**Changes not showing?**
- Check your browser - it should auto-reload
- If not, refresh the page manually
- Make sure `npm start` is still running

**Deploy not working?**
- Make sure you committed your changes to git first
- Check that you have push access to the repository

## Notes

- Built with Create React App
- Uses React Router for page navigation
- Deployed via GitHub Pages
- CSS uses a mix of custom styles and Bootstrap
