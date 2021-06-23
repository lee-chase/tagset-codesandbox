import { pkg } from "@carbon/ibm-cloud-cognitive";

pkg.prefix = "tst";

// Enable all 'canary' (not yet reviewed/released) components
// that we want to make use of
pkg.component.TagSet = true;

// Live dangerously: enable all components!
// pkg.setAllComponents(true);

// Enable all pre-release feature flags that we want to use
// pkg.flags.noneJustYet = true;

// Live dangerously: enable all pre-release features!
// pkg.setAllFeatures(true);
