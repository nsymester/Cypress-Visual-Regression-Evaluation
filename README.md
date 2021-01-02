# Cypress Testing

## Troubleshooting

Problem: After installing Cypress 6.2.0 and running `$ npx cypress open`

You get the following:

```bash
It looks like this is your first time using Cypress: 6.2.0

  ×  Verifying Cypress can run C:\Users\symestern\AppData\Local\Cypress\Cache\6.2.0\Cypress
    → Cypress Version: 6.2.0
Cypress failed to start.
```

Solution:

```bash
 $ npm cache clean --force
 $ npx cypress install --force
```
