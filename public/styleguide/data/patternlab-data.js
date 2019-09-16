var config = {
  cacheBuster: 1568648816,
  defaultPattern: "all",
  defaultShowPatternInfo: false,
  patternExtension: "twig",
  ishMaximum: "2600",
  ishMinimum: "240",
  outputFileSuffixes: { rendered: "", rawTemplate: "", markupOnly: ".markup-only" },
  patternStates: ["inprogress", "inreview", "complete"],
  plugins: { dataTransform: { enabled: true, verbose: false } }
};
var ishControls = { ishControlsHide: { hay: "true" } };
var navItems = {
  patternTypes: [
    {
      patternTypeLC: "protons",
      patternTypeUC: "Protons",
      patternType: "00-protons",
      patternTypeDash: "protons",
      patternTypeItems: [],
      patternItems: [
        {
          patternPath: "00-protons-01-visibility/00-protons-01-visibility.html",
          patternSrcPath: "00-protons/01-visibility",
          patternName: "Visibility",
          patternState: "",
          patternPartial: "protons-visibility"
        },
        {
          patternPath: "00-protons-02-animations/00-protons-02-animations.html",
          patternSrcPath: "00-protons/02-animations",
          patternName: "Animations",
          patternState: "",
          patternPartial: "protons-animations"
        }
      ]
    },
    {
      patternTypeLC: "atoms",
      patternTypeUC: "Atoms",
      patternType: "01-atoms",
      patternTypeDash: "atoms",
      patternTypeItems: [
        {
          patternSubtypeLC: "colors",
          patternSubtypeUC: "Colors",
          patternSubtype: "01-colors",
          patternSubtypeDash: "colors",
          patternSubtypeItems: [
            {
              patternPath:
                "01-atoms-01-colors-01-theme-colors/01-atoms-01-colors-01-theme-colors.html",
              patternSrcPath: "01-atoms/01-colors/01-theme-colors",
              patternName: "Theme Colors",
              patternState: "",
              patternPartial: "atoms-theme-colors"
            },
            {
              patternPath:
                "01-atoms-01-colors-02-state-colors/01-atoms-01-colors-02-state-colors.html",
              patternSrcPath: "01-atoms/01-colors/02-state-colors",
              patternName: "State Colors",
              patternState: "",
              patternPartial: "atoms-state-colors"
            },
            {
              patternPath: "01-atoms-01-colors/index.html",
              patternName: "View All",
              patternType: "01-atoms",
              patternSubtype: "01-colors",
              patternPartial: "viewall-atoms-colors"
            }
          ]
        },
        {
          patternSubtypeLC: "typography",
          patternSubtypeUC: "Typography",
          patternSubtype: "02-typography",
          patternSubtypeDash: "typography",
          patternSubtypeItems: [
            {
              patternPath: "01-atoms-02-typography-01-fonts/01-atoms-02-typography-01-fonts.html",
              patternSrcPath: "01-atoms/02-typography/01-fonts",
              patternName: "Fonts",
              patternState: "",
              patternPartial: "atoms-fonts"
            },
            {
              patternPath: "01-atoms-02-typography/index.html",
              patternName: "View All",
              patternType: "01-atoms",
              patternSubtype: "02-typography",
              patternPartial: "viewall-atoms-typography"
            }
          ]
        },
        {
          patternSubtypeLC: "buttons",
          patternSubtypeUC: "Buttons",
          patternSubtype: "03-buttons",
          patternSubtypeDash: "buttons",
          patternSubtypeItems: [
            {
              patternPath: "01-atoms-03-buttons-01-buttons/01-atoms-03-buttons-01-buttons.html",
              patternSrcPath: "01-atoms/03-buttons/01-buttons",
              patternName: "Buttons",
              patternState: "",
              patternPartial: "atoms-buttons"
            },
            {
              patternPath: "01-atoms-03-buttons/index.html",
              patternName: "View All",
              patternType: "01-atoms",
              patternSubtype: "03-buttons",
              patternPartial: "viewall-atoms-buttons"
            }
          ]
        },
        {
          patternSubtypeLC: "forms",
          patternSubtypeUC: "Forms",
          patternSubtype: "04-forms",
          patternSubtypeDash: "forms",
          patternSubtypeItems: [
            {
              patternPath: "01-atoms-04-forms-01-checkbox/01-atoms-04-forms-01-checkbox.html",
              patternSrcPath: "01-atoms/04-forms/01-checkbox",
              patternName: "Checkbox",
              patternState: "",
              patternPartial: "atoms-checkbox"
            },
            {
              patternPath: "01-atoms-04-forms-02-radio/01-atoms-04-forms-02-radio.html",
              patternSrcPath: "01-atoms/04-forms/02-radio",
              patternName: "Radio",
              patternState: "",
              patternPartial: "atoms-radio"
            },
            {
              patternPath: "01-atoms-04-forms-03-text-input/01-atoms-04-forms-03-text-input.html",
              patternSrcPath: "01-atoms/04-forms/03-text-input",
              patternName: "Text Input",
              patternState: "",
              patternPartial: "atoms-text-input"
            },
            {
              patternPath: "01-atoms-04-forms-04-select/01-atoms-04-forms-04-select.html",
              patternSrcPath: "01-atoms/04-forms/04-select",
              patternName: "Select",
              patternState: "",
              patternPartial: "atoms-select"
            },
            {
              patternPath: "01-atoms-04-forms/index.html",
              patternName: "View All",
              patternType: "01-atoms",
              patternSubtype: "04-forms",
              patternPartial: "viewall-atoms-forms"
            }
          ]
        }
      ],
      patternItems: [
        {
          patternPath: "01-atoms/index.html",
          patternName: "View All",
          patternType: "01-atoms",
          patternSubtype: "all",
          patternPartial: "viewall-atoms-all"
        }
      ]
    },
    {
      patternTypeLC: "molecules",
      patternTypeUC: "Molecules",
      patternType: "02-molecules",
      patternTypeDash: "molecules",
      patternTypeItems: [
        {
          patternSubtypeLC: "blocks",
          patternSubtypeUC: "Blocks",
          patternSubtype: "01-blocks",
          patternSubtypeDash: "blocks",
          patternSubtypeItems: [
            {
              patternPath:
                "02-molecules-01-blocks-01-card-01-card/02-molecules-01-blocks-01-card-01-card.html",
              patternSrcPath: "02-molecules/01-blocks/01-card/01-card",
              patternName: "Card",
              patternState: "",
              patternPartial: "molecules-card"
            },
            {
              patternPath:
                "02-molecules-01-blocks-02-hero-01-hero/02-molecules-01-blocks-02-hero-01-hero.html",
              patternSrcPath: "02-molecules/01-blocks/02-hero/01-hero",
              patternName: "Hero",
              patternState: "",
              patternPartial: "molecules-hero"
            },
            {
              patternPath:
                "02-molecules-01-blocks-03-postcard-01-postcard/02-molecules-01-blocks-03-postcard-01-postcard.html",
              patternSrcPath: "02-molecules/01-blocks/03-postcard/01-postcard",
              patternName: "Postcard",
              patternState: "",
              patternPartial: "molecules-postcard"
            },
            {
              patternPath: "02-molecules-01-blocks/index.html",
              patternName: "View All",
              patternType: "02-molecules",
              patternSubtype: "01-blocks",
              patternPartial: "viewall-molecules-blocks"
            }
          ]
        },
        {
          patternSubtypeLC: "navigation",
          patternSubtypeUC: "Navigation",
          patternSubtype: "02-navigation",
          patternSubtypeDash: "navigation",
          patternSubtypeItems: [
            {
              patternPath:
                "02-molecules-02-navigation-01-side-nav-01-side-nav/02-molecules-02-navigation-01-side-nav-01-side-nav.html",
              patternSrcPath: "02-molecules/02-navigation/01-side-nav/01-side-nav",
              patternName: "Side Nav",
              patternState: "",
              patternPartial: "molecules-side-nav"
            },
            {
              patternPath:
                "02-molecules-02-navigation-02-scroll-nav-01-scroll-nav/02-molecules-02-navigation-02-scroll-nav-01-scroll-nav.html",
              patternSrcPath: "02-molecules/02-navigation/02-scroll-nav/01-scroll-nav",
              patternName: "Scroll Nav",
              patternState: "",
              patternPartial: "molecules-scroll-nav"
            },
            {
              patternPath:
                "02-molecules-02-navigation-03-breadcrumbs-01-breadcrumbs/02-molecules-02-navigation-03-breadcrumbs-01-breadcrumbs.html",
              patternSrcPath: "02-molecules/02-navigation/03-breadcrumbs/01-breadcrumbs",
              patternName: "Breadcrumbs",
              patternState: "",
              patternPartial: "molecules-breadcrumbs"
            },
            {
              patternPath: "02-molecules-02-navigation/index.html",
              patternName: "View All",
              patternType: "02-molecules",
              patternSubtype: "02-navigation",
              patternPartial: "viewall-molecules-navigation"
            }
          ]
        },
        {
          patternSubtypeLC: "text",
          patternSubtypeUC: "Text",
          patternSubtype: "03-text",
          patternSubtypeDash: "text",
          patternSubtypeItems: [
            {
              patternPath:
                "02-molecules-03-text-01-header-group-01-header-group/02-molecules-03-text-01-header-group-01-header-group.html",
              patternSrcPath: "02-molecules/03-text/01-header-group/01-header-group",
              patternName: "Header Group",
              patternState: "",
              patternPartial: "molecules-header-group"
            },
            {
              patternPath: "02-molecules-03-text/index.html",
              patternName: "View All",
              patternType: "02-molecules",
              patternSubtype: "03-text",
              patternPartial: "viewall-molecules-text"
            }
          ]
        }
      ],
      patternItems: [
        {
          patternPath: "02-molecules/index.html",
          patternName: "View All",
          patternType: "02-molecules",
          patternSubtype: "all",
          patternPartial: "viewall-molecules-all"
        }
      ]
    },
    {
      patternTypeLC: "organisms",
      patternTypeUC: "Organisms",
      patternType: "03-organisms",
      patternTypeDash: "organisms",
      patternTypeItems: [
        {
          patternSubtypeLC: "sections",
          patternSubtypeUC: "Sections",
          patternSubtype: "01-sections",
          patternSubtypeDash: "sections",
          patternSubtypeItems: [
            {
              patternPath:
                "03-organisms-01-sections-01-text-section-01-text-section/03-organisms-01-sections-01-text-section-01-text-section.html",
              patternSrcPath: "03-organisms/01-sections/01-text-section/01-text-section",
              patternName: "Text Section",
              patternState: "",
              patternPartial: "organisms-text-section"
            },
            {
              patternPath:
                "03-organisms-01-sections-02-switchboard-01-switchboard/03-organisms-01-sections-02-switchboard-01-switchboard.html",
              patternSrcPath: "03-organisms/01-sections/02-switchboard/01-switchboard",
              patternName: "Switchboard",
              patternState: "",
              patternPartial: "organisms-switchboard"
            },
            {
              patternPath:
                "03-organisms-01-sections-03-steps-01-steps/03-organisms-01-sections-03-steps-01-steps.html",
              patternSrcPath: "03-organisms/01-sections/03-steps/01-steps",
              patternName: "Steps",
              patternState: "",
              patternPartial: "organisms-steps"
            },
            {
              patternPath:
                "03-organisms-01-sections-04-flowmap-01-flowmap/03-organisms-01-sections-04-flowmap-01-flowmap.html",
              patternSrcPath: "03-organisms/01-sections/04-flowmap/01-flowmap",
              patternName: "Flowmap",
              patternState: "",
              patternPartial: "organisms-flowmap"
            },
            {
              patternPath: "03-organisms-01-sections/index.html",
              patternName: "View All",
              patternType: "03-organisms",
              patternSubtype: "01-sections",
              patternPartial: "viewall-organisms-sections"
            }
          ]
        },
        {
          patternSubtypeLC: "lists",
          patternSubtypeUC: "Lists",
          patternSubtype: "02-lists",
          patternSubtypeDash: "lists",
          patternSubtypeItems: [
            {
              patternPath:
                "03-organisms-02-lists-01-card-list-01-card-list/03-organisms-02-lists-01-card-list-01-card-list.html",
              patternSrcPath: "03-organisms/02-lists/01-card-list/01-card-list",
              patternName: "Card List",
              patternState: "",
              patternPartial: "organisms-card-list"
            },
            {
              patternPath: "03-organisms-02-lists/index.html",
              patternName: "View All",
              patternType: "03-organisms",
              patternSubtype: "02-lists",
              patternPartial: "viewall-organisms-lists"
            }
          ]
        }
      ],
      patternItems: [
        {
          patternPath: "03-organisms/index.html",
          patternName: "View All",
          patternType: "03-organisms",
          patternSubtype: "all",
          patternPartial: "viewall-organisms-all"
        }
      ]
    },
    {
      patternTypeLC: "templates",
      patternTypeUC: "Templates",
      patternType: "04-templates",
      patternTypeDash: "templates",
      patternTypeItems: [],
      patternItems: [
        {
          patternPath: "04-templates-01-basic-page/04-templates-01-basic-page.html",
          patternSrcPath: "04-templates/01-basic-page",
          patternName: "Basic Page",
          patternState: "",
          patternPartial: "templates-basic-page"
        }
      ]
    },
    {
      patternTypeLC: "pages",
      patternTypeUC: "Pages",
      patternType: "05-pages",
      patternTypeDash: "pages",
      patternTypeItems: [],
      patternItems: []
    }
  ]
};
var patternPaths = {
  protons: { visibility: "00-protons-01-visibility", animations: "00-protons-02-animations" },
  atoms: {
    "theme-colors": "01-atoms-01-colors-01-theme-colors",
    "state-colors": "01-atoms-01-colors-02-state-colors",
    fonts: "01-atoms-02-typography-01-fonts",
    buttons: "01-atoms-03-buttons-01-buttons",
    checkbox: "01-atoms-04-forms-01-checkbox",
    radio: "01-atoms-04-forms-02-radio",
    "text-input": "01-atoms-04-forms-03-text-input",
    select: "01-atoms-04-forms-04-select"
  },
  molecules: {
    card: "02-molecules-01-blocks-01-card-01-card",
    hero: "02-molecules-01-blocks-02-hero-01-hero",
    postcard: "02-molecules-01-blocks-03-postcard-01-postcard",
    "side-nav": "02-molecules-02-navigation-01-side-nav-01-side-nav",
    "scroll-nav": "02-molecules-02-navigation-02-scroll-nav-01-scroll-nav",
    breadcrumbs: "02-molecules-02-navigation-03-breadcrumbs-01-breadcrumbs",
    "header-group": "02-molecules-03-text-01-header-group-01-header-group"
  },
  organisms: {
    "text-section": "03-organisms-01-sections-01-text-section-01-text-section",
    switchboard: "03-organisms-01-sections-02-switchboard-01-switchboard",
    steps: "03-organisms-01-sections-03-steps-01-steps",
    flowmap: "03-organisms-01-sections-04-flowmap-01-flowmap",
    "card-list": "03-organisms-02-lists-01-card-list-01-card-list"
  },
  templates: { "basic-page": "04-templates-01-basic-page" }
};
var viewAllPaths = {
  atoms: {
    colors: "01-atoms-01-colors",
    all: "01-atoms",
    typography: "01-atoms-02-typography",
    buttons: "01-atoms-03-buttons",
    forms: "01-atoms-04-forms"
  },
  molecules: {
    blocks: "02-molecules-01-blocks",
    all: "02-molecules",
    navigation: "02-molecules-02-navigation",
    text: "02-molecules-03-text"
  },
  organisms: {
    sections: "03-organisms-01-sections",
    all: "03-organisms",
    lists: "03-organisms-02-lists"
  }
};
var plugins = [];
