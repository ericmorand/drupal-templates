#Drupal 8 templates

Drupal 8 core templates as npm dependencies!

##What is the purpose of this package?

This package allows Drupal 8 themers to create custom themes without having to actually install Drupal 8 on their computer - that is by using only nodejs and npm tools like [twigjs](https://www.npmjs.com/package/twig) or [stromboli](https://www.npmjs.com/package/stromboli) + [stromboli-plugin-twig](https://www.npmjs.com/package/stromboli-plugin-twig).

##Which version should I use?

You should always use the most recent version of this package that belongs to the Drupal 8 version that your project is targeting.

The mapping rule is pretty simple: the **first** two digits of this package version will always match the **last** two digits of the corresponding Drupal 8 version.

Here are some examples of what your dependency declaration would look like for the following (hypothetical) versions of Drupal 8:

* Drupal 8.2.5: `"drupal8-templates": 2.5.x`

* Drupal 8.3.0: `"drupal8-templates": 3.0.x`

* Drupal 8.4.9: `"drupal8-templates": 4.9.x`