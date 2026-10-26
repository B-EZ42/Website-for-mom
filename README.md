# Ranch Christmas Rentals — Website

A simple, no-build website for a family holiday-décor and party-rental business.
Just HTML, CSS, and JavaScript — open `index.html` in a browser to see it.

## Files

| File | What it's for |
|------|---------------|
| `index.html` | The page text: hero, packages, story, FAQ, contact info |
| `items.js` | **The rental catalog** — add/remove items and change prices here |
| `script.js` | Catalog display + request form. Set `BUSINESS_EMAIL` at the top |
| `styles.css` | Colors and layout (colors are at the top under `:root`) |
| `images/` | Put item photos here |

## Things to fill in before launch

- [ ] **Business name** — "Ranch Christmas Rentals" is a placeholder. Search-and-replace it in `index.html`.
- [ ] **Phone & email** — in the Contact section of `index.html`, and `BUSINESS_EMAIL` in `script.js`.
- [ ] **Service area** — the 📍 line in the Contact section.
- [ ] **Prices** — every price in `items.js` and the packages in `index.html` is a guess.
- [ ] **Real inventory** — swap the sample items in `items.js` for what's actually coming from the ranch.
- [ ] **Photos** — drop pictures in `images/` and add `image: "images/your-photo.jpg"` to an item.
- [ ] **Our Story / FAQ** — have Mom read these and adjust the wording, deposit policy, etc.

## Adding an item

In `items.js`, copy a line like this and change it:

```js
{ name: "Red Sleigh", category: "christmas", price: 60, per: "event",
  image: "images/sleigh.jpg", desc: "Vintage sleigh for photos and entryways." },
```

Use `price: null` to show "Ask for price".

## How requests work

The "Send Request" form opens the visitor's email app with their request pre-filled,
addressed to `BUSINESS_EMAIL`. No server needed. Clicking **+ Add** on a rental or
**Request** on a package adds it to the form automatically.

## Putting it online (free)

**GitHub Pages:** repo **Settings → Pages → Deploy from a branch**, pick the branch and `/ (root)`.
The site will be live at `https://<username>.github.io/<repo>/` within a minute or two.
A custom domain (e.g. `ranchchristmasrentals.com`, ~$12/yr) can be added on the same page.
