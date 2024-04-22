# Reproduction of an issue where extending a layer should override the layer config



# Setup

```
pnpm i
pnpm dev

```

The button displayed should be black since it was overriden at the application  level. The base layer defines it as red.