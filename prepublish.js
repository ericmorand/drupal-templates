var copyfiles = require('copyfiles');

copyfiles(['drupal/**/*.html.twig', 'src'], 1, function (err) {});