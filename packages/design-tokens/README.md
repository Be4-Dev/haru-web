# Haru Design Token Package

### This is a package for managing design tokens.

First, designers create design tokens using design tools such as Figma, etc.

Second, designers publish design tokens to `data` directory.

> We're going to call these tokens **Raw Tokens**. And as of Oct. 7, 2023, we're adopting **Tokens Studio for Figma** to carry out this step.

Third, `GitHub Actions` formats Raw Tokens automatically to improve DX.

> We are using `token-transformer` and `style-dictionary` to carry out this step.
