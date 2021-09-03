# Cypress Testing

## Testing

### 1. Regression Test (_recommended_)

**Uses:**

"cypress": "^5.4.0",

"cypress-image-snapshot": "^2.2.2",

**Summary:** works well on local test site

### 2. Screenshot By Leonardo Faria

**Uses:**

"cypress": "^5.4.0",

"cypress-image-snapshot": "^3.1.1",

**Summary:**
Works well on local test site.
Currently the best one.

**Exception:** needs to run docker command via Powershell or CMD

### 3. Screenshot By Leonardo Faria with Dockerfile

**Uses:**

"cypress": "^5.4.0",

"cypress-image-snapshot": "^2.2.2",

**Summary:** works well on local test site

### 4. Visual Regression by Michael Herman

**Uses:**

"cypress": "^6.2.0",

"cypress-visual-regression": "^1.5.6"

**Summary:** works well on local test site

### 5. Snapshot by VALENTINO GAGLIARDI

**Uses:**

"cypress": "^5.4.0",

cypress-plugin-snapshots": "^1.4.4",

**Summary:** works well on local test site

## Troubleshooting

Problem: After installing Cypress 6.2.0 and running `$ npx cypress open`

You get the following:

```bash
It looks like this is your first time using Cypress: 6.2.0

  ×  Verifying Cypress can run `C:\Users\symestern\AppData\Local\Cypress\Cache\6.2.0\Cypress`
    → Cypress Version: 6.2.0
Cypress failed to start.
```

Solution:

```bash
 $ npm cache clean --force
 $ npx cypress install --force
```
