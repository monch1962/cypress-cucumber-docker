# Custom steps directory

If you want to load any custom step implementations, then copy them into this directory.

** PLEASE DON'T DO THIS IF YOU CAN AVOID IT **

We're trying to ensure step implementations can be portable across different testrunner implementations, so having custom steps goes against this long term goal. It's reasonable to do this as an interim step while a standard/portable set of step definitions are still being sorted out, but it should be an interim step only.

Bear in mind that you'll need to have this content at the top of any file of custom steps

```
import {
    Given, When, Then
} from 'cypress-cucumber-preprocessor/steps'
```

followed by the implementation of your steps:

```
import blah from './blah.js'
Given(
    /^blah$/,
    blah
)
```

Note that, if you want to interact with Cypress itself (i.e. use cy.\* in your step definition files), you'll have to add another level of redirection. Referring to the example above, that means you'll have to implement the Cypress interactions in the file `blah.js` - you can't do that within the same file that contains the Given, When, Then steps
