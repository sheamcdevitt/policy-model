//
//Other
//
var emptyNode = {
  id: "BCPRI",
  display: "3",
  parentGroup: "Belfast City Council Public Realm",
  group: "Belfast City Council Public Realm Indicators",
  description:
    "Phase 3: Respond to new City Centre drivers with a new North/South public realm spine on Royal Avenue linking to the Ulster University campus and the rejuvenation of Cathedral Gardens. Phase 3 also begins the transformation of Belfast inner ring road into a tree lined boulevard. To be completed by 2018.",
  type: "Child",
};
var modelStates = [],
  modelStatesIndex = 0,
  modelStatesLinks = [],
  passAdd = {
    nodes: [],
    links: [],
  };

//
//Show only fades
//
var health = [
    "Health",
    "Healthy",
    "Live",
    "Life",
    "Well-being",
    "Mortality",
    "Death",
    "Neonatal",
    "Birth",
    "Epidemic",
    "AIDS",
    "tuberculosis",
    "malaria",
    "Disease",
    "hepatitis",
    "Water-borne",
    "Infection",
    "Mental health",
    "Prevention",
    "Substance",
    "Drug",
    "Medicine",
    "Treatment",
    "Narcotic",
    "Alcohol",
    "Accidents",
    "Reproduce",
    "Family planning",
    "Care",
    "Vaccines",
    "Chemicals",
    "Air",
    "Water",
    "Soil",
    "Pollution",
    "Contamination",
    "Tobacco",
    "Training",
    "Disability",
  ],
  education = [
    "Education",
    "Educate",
    "Primary",
    "Secondary",
    "Tertiary",
    "Vocational",
    "Skill",
    "Technical",
    "Quality",
    "Entrepreneurship",
    "Employment",
    "Youth",
    "Literacy",
    "Numeracy",
    "Learn",
    "Knowledge",
    "Scholarship",
    "Train",
    "Science",
    "Science",
    "Teach",
  ],
  tourism = ["Amenity", "Fly", "Plane", "Tourism"];

var highlightStrands = ["Health", "Education", "Tourism"];
var highlightStrandsColours = ["Red", "LightBlue", "Coral"];
var highlightObject = {
  Health: "red",
  Education: "lightblue",
  Tourism: "coral",
};
var highlightStore = [false, false, false], //id : flag
  highlightStoreStrs = [],
  highlightStoreGroup = [],
  highlightStoreGroupStrs = [],
  currentGroups = {};

var groupColours = {
  "UN Sustainable Development Goals": "red",
  "WHO Arts Components": "deeppink",
  "WHO 5 Ways To Wellbeing": "lightsalmon",
  "Programme for Government": "blue",
  "Belfast Agenda": "purple",
  "A City Imagining - Priorities": "orange",
  "Resilience - Shocks and Stresses": "green",
  Resilience: "darkorchid",
  "Belfast Agenda Immediate Priorities": "aquamarine",
  "Culture 2030 Indicators": "cornsilk",
  "Belfast City Council Public Realm": "darkseagreen",
  "Belfast City Council Local Development Plan": "tomato",
  "Belfast City Council Open Spaces Strategy": "indigo",
  "Derry City And Strabane Districts Inclusive Strategic Growth Plan":
    "lightcoral",
  "Protect Life 2 - Suicide Prevention Strategy": "darkslateblue",
  "Making Life Better": "firebrick",
  "Belfast Green and Blue Infrastructure Plan": "mediumseagreen",
  "A Bolder Vision for Belfast": "sienna",
};

//
//INSIGHTS
//
var pfgTargetDistribution = {};
//
//MODELS
//

//10 test
var tentest = {
  nodes: [
    {
      id: "BCCPR",
      display: "Dwell Longer",
      parentGroup: "Belfast City Council Public Realm",
      group: "Belfast City Council Public Realm Objectives",
      description: "Encourage people to dwell longer in the City Centre",
      type: "Parent",
    },
    {
      id: "BGBIP1",
      display: "Biodiverse",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Biodiverse",
      type: "Parent",
    },
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "PFGVI29",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase environmental sustainability",
      type: "Child",
    },
    {
      id: "WHORA1",
      display: "Aesthetic engagement",
      parentGroup: "WHO Arts Components",
      group: "WHO Arts Components",
      description: "Aesthetic engagement",
      type: "Parent",
    },
    {
      id: "WHORF1",
      display: "Connect",
      parentGroup: "WHO 5 Ways To Wellbeing",
      group: "WHO 5 Ways To Wellbeing",
      description: "Talk and listen, be there, feel connected",
      type: "Parent",
    },
    {
      id: "BELAG1",
      display: "Economy",
      parentGroup: "Belfast Agenda",
      group: "Belfast Agenda Outcomes",
      description:
        "Everyone in Belfast benefits from a thriving and prosperous economy",
      type: "Parent",
    },
    {
      id: "DSSGP1",
      display: "Better Skilled & Educated",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description: "(Economic wellbeing): We are better skilled and educated",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "ACIPR4",
      display: "A City Exploring",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description: "A City Exploring",
      type: "Parent",
    },
    {
      id: "PHMLB1",
      display: "Quality Parenting & Family Support",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Good quality parenting and family support",
      type: "Parent",
    },
  ],
  links: [],
};

//WESTLINK
var westlinkOveralljson = {
  nodes: [
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },
    {
      id: "UNSDG8",
      display: "Work & Economic Growth",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Decent Work and Economic Growth",
      type: "Parent",
    },
    {
      id: "UNSDG9",
      display: "Industry, Innovation & Infrastructure",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Industry, Innovation and Infrastructure",
      type: "Parent",
    },
    {
      id: "UNSDG10",
      display: "Reduced Inequality",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Reduced Inequality",
      type: "Parent",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },
    {
      id: "UNSDG12",
      display: "Consumption & Production",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Responsible Consumption and Production",
      type: "Parent",
    },
    {
      id: "UNSDG13",
      display: "Climate Action",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Climate Action",
      type: "Parent",
    },
    {
      id: "UNSDG16",
      display: "Peace & Justice",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Peace and Justice Strong Institutions",
      type: "Parent",
    },
    {
      id: "UNSDG17",
      display: "Achieve",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Partnerships to achieve the Goal",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },

    {
      id: "UNSDT3.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "UNSDT9.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },
    {
      id: "UNSDT11.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons",
      type: "Child",
    },
    {
      id: "UNSDT11.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries",
      type: "Child",
    },
    {
      id: "UNSDT11.6",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },
    {
      id: "UNSDT11.b",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2020, substantially increase the number of cities and human settlements adopting and implementing integrated policies and plans towards inclusion, resource efficiency, mitigation and adaptation to climate change, resilience to disasters, and develop and implement, in line with the Sendai Framework for Disaster Risk Reduction 2015–2030, holistic disaster risk management at all levels",
      type: "Child",
    },
    {
      id: "UNSDT12.8",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
      type: "Child",
    },
    {
      id: "UNSDT12.b",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT13.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
      type: "Child",
    },
    {
      id: "UNSDT13.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
      type: "Child",
    },
    {
      id: "UNSDT13.b",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities",
      type: "Child",
    },
    {
      id: "UNSDT15.a",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems",
      type: "Child",
    },
    {
      id: "UNSDT16.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Ensure responsive, inclusive, participatory and representative decision-making at all levels",
      type: "Child",
    },
    {
      id: "UNSDT17.14",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description: "Enhance policy coherence for sustainable development",
      type: "Child",
    },
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI7",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve health in pregnancy",
      type: "Child",
    },
    {
      id: "PFGVI24",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve internet connectivity",
      type: "Child",
    },
    {
      id: "PFGVI29",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase environmental sustainability",
      type: "Child",
    },
    {
      id: "PFGVI30",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our attractiveness as a destination",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },
    {
      id: "PFGVI37",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve air quality",
      type: "Child",
    },
    {
      id: "BGBIP1",
      display: "Biodiverse",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Biodiverse",
      type: "Parent",
    },
    {
      id: "BGBIP2",
      display: "Network",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Planned, interconnected network",
      type: "Parent",
    },
    {
      id: "BGBIP3",
      display: "Urban Environment",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Integrated into the urban environment",
      type: "Parent",
    },
    {
      id: "BGBIP4",
      display: "Designed & Managed",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Well designed and managed",
      type: "Parent",
    },
    {
      id: "BGBIP5",
      display: "Appropiately Funded",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Appropriately funded",
      type: "Parent",
    },
    {
      id: "BGBIB1",
      display: "Community Cohesion",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Supports community cohesion",
      type: "Parent",
    },
    {
      id: "BGBIB2",
      display: "Drop in Theft",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Increases safety through 24% drop in burglaries and 69% drop in robberies",
      type: "Parent",
    },
    {
      id: "BGBIB3",
      display: "Setting, Character & Design Quality",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Contributes to place setting, character and design quality",
      type: "Parent",
    },
    {
      id: "BGBIB4",
      display: "Safe Movement",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improve connectivity for safe movement across the city",
      type: "Parent",
    },
    {
      id: "BGBIB5",
      display: "Health Benefits",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Provides demonstrable cardio, respiratory and mental health benefits (24% more likely to walk, run, cycle if live within 400m of green infrastructure)",
      type: "Parent",
    },
    {
      id: "BGBIB6",
      display: "Recreation",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Enables formal and informal recreation",
      type: "Parent",
    },
    {
      id: "BGBIB7",
      display: "Improve Air Quality",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improves air quality in terms of NOX, PM2.5 and PM10",
      type: "Parent",
    },
    {
      id: "BGBIB8",
      display: "Space for Biodiversity",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Provides space for biodiversity",
      type: "Parent",
    },
    {
      id: "BGBIB9",
      display: "Reduce Urban Temperature",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Reduced the heat island effect (increase of 10% green space can reduce urban temperature by up to 3 degrees celsius)",
      type: "Parent",
    },
    {
      id: "BGBIB10",
      display: "Drainage and Flood Management",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Supports sustainable approaches to drainage and flood risk management/ improves air quality",
      type: "Parent",
    },
    {
      id: "BGBIB11",
      display: "Creates Public Value",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "High rate of return on investment through job creation, tourism expenditure, social cost saving and wellbeing benefits (Every £1 of investment create £2 in public value)",
      type: "Parent",
    },
    {
      id: "BGBIB12",
      display: "Tourism",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Attracts visitors and tourists (£1.66-£2.78 expenditure per visit)",
      type: "Parent",
    },
    {
      id: "BGBIB13",
      display: "Elevated Property Prices",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Elevated property prices (5-7% increase)",
      type: "Parent",
    },
    {
      id: "RESIL1",
      display: "Climate Resilience",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate resilience",
      type: "Parent",
    },
    {
      id: "RESIL2",
      display: "Connectivity",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Connectivity",
      type: "Parent",
    },
    {
      id: "RESIL3",
      display: "C&Y People",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Children and young people",
      type: "Parent",
    },
    {
      id: "RESIL1.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Reducing your carbon footprint",
      type: "Child",
    },
    {
      id: "RESIL1.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description:
        "Better air quality - Risk to health and enjoyment of the city",
      type: "Child",
    },
    {
      id: "RESIL1.3",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "One million trees",
      type: "Child",
    },
    {
      id: "RESIL2.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Walking, cycling and public transport",
      type: "Child",
    },
    {
      id: "RESIL2.3",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Waste Water treatment capacity",
      type: "Child",
    },
    {
      id: "RESIL3.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Shaping your city",
      type: "Child",
    },
    {
      id: "RESIL3.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate Conversation",
      type: "Child",
    },
    {
      id: "RESSS1",
      display: "Shocks",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Shocks",
      type: "Parent",
    },
    {
      id: "RESSS2",
      display: "Stresses",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Stresses",
      type: "Parent",
    },
    {
      id: "RESSS1.1",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Economic recovery capacity: inequality and competitiveness",
      type: "Child",
    },
    {
      id: "RESSS1.2",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Population change",
      type: "Child",
    },
    {
      id: "RESSS1.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Dependency on fossil fuels and carbon intensive systems",
      type: "Child",
    },
    {
      id: "RESSS1.4",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Prevalence of car use",
      type: "Child",
    },
    {
      id: "RESSS1.6",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Segregation and division",
      type: "Child",
    },
    {
      id: "RESSS1.7",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Mental health and use of prescription drugs",
      type: "Child",
    },
    {
      id: "RESSS1.8",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Governance and financing of risk",
      type: "Child",
    },
    {
      id: "RESSS2.1",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Infrastructure capacity",
      type: "Child",
    },
    {
      id: "RESSS2.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Climate change",
      type: "Child",
    },
    {
      id: "RESSS2.4",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Flooding and extreme weather events",
      type: "Child",
    },
    {
      id: "ABVFB1",
      display: "Environment & Wellbeing",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Creating a healthy, shared, vibrant and sustainable environment that promotes wellbeing for all, inclusive growth and innovation",
      type: "Parent",
    },
    {
      id: "ABVFB2",
      display: "Sustainable Transport",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Fundamentally changing the centre of Belfast to prioritise integrated walking, cycling and public transport and end the dominance of the car",
      type: "Parent",
    },
    {
      id: "ABVFB3",
      display: "Resilience & Heritage",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Providing lively, safe and green streets linking inclusive shared spaces to promote resilience and enhance our built heritage",
      type: "Parent",
    },
    {
      id: "ABVFB4",
      display: "Improved Access",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Removing severance and barriers to movement between the centre of Belfast and the surrounding communities to improve access for all",
      type: "Parent",
    },
    {
      id: "BCLDP1",
      display: "Support Economic & Social Needs",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a 15 year plan framework to support economic and social needs in the city, in line with regional strategies and policies, while providing the delivery of sustainable development",
      type: "Parent",
    },
    {
      id: "BCLDP2",
      display: "Facilitate Growth",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Facilitate growth by coordinating public and private investment to encourage development where it can be of most benefit to the wellbeing of the community",
      type: "Parent",
    },
    {
      id: "BCLDP3",
      display: "Allocate Sufficient Land",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description: "Allocate sufficient land to meet the needs of the city",
      type: "Parent",
    },
    {
      id: "BCLDP4",
      display: "Inclusive Development",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide an opportunity for all stakeholders, including the public, to have a say about where and how development within the local area should take place",
      type: "Parent",
    },
    {
      id: "BCLDP5",
      display: "Provide a Framework",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a plan-led framework for rational and consistent decision making by the public, private and community sectors and those affected by development proposals",
      type: "Parent",
    },
    {
      id: "BCLDP6",
      display: "Deliver spatial Aspects",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Deliver the spatial aspects of The Belfast Agenda, the city's Community Plan",
      type: "Parent",
    },
    {
      id: "BLDPI1.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Growing Belfast):Identify land to support the creation of up to 46,000 new jobs",
      type: "Child",
    },
    {
      id: "BLDPI1.2",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Growing Belfast):Increase the city's population by 66,000 to over 400,000 by 2035",
      type: "Child",
    },
    {
      id: "BLDPI1.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description: "(Growing Belfast):Allocate land for 37,000 new homes",
      type: "Child",
    },
    {
      id: "BLDPI2.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Homes):Allocate land for 37,000 new homes prioritising the reuse of vacant and derelict ‘brownfield’ land and increasing the density of homes;",
      type: "Child",
    },
    {
      id: "BLDPI2.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure our main routes and arrival points are attractive",
      type: "Child",
    },
    {
      id: "BLDPI2.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure new development promotes greater connectivity",
      type: "Child",
    },
    {
      id: "BLDPI2.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Protect and enhance our older buildings",
      type: "Child",
    },
    {
      id: "BLDPI2.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Make the most of our unique features",
      type: "Child",
    },
    {
      id: "BLDPI2.14",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Promote high standards of energy efficiency in design",
      type: "Child",
    },
    {
      id: "BLDPI3.7",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - Economic Growth):Ensure a good mix of uses to meet local shopping needs and to provide local services",
      type: "Child",
    },
    {
      id: "BLDPI3.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Review and define the city centre boundary to ensure enough space for future city centre developments",
      type: "Child",
    },
    {
      id: "BLDPI3.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Support and guide tourism development to enhance the city centre as the regional economic driver",
      type: "Child",
    },
    {
      id: "BLDPI3.11",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Support city centre living",
      type: "Child",
    },
    {
      id: "BLDPI3.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Promote shared space",
      type: "Child",
    },
    {
      id: "BLDPI3.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Regenerate key places within the city centre",
      type: "Child",
    },
    {
      id: "BLDPI4.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Infrastructure):Aim to ensure there is appropriate infrastructure to meet our needs whilst protecting our environment",
      type: "Child",
    },
    {
      id: "BLDPI4.2",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Transportation):Support walking and cycling alongside sustainable transport",
      type: "Child",
    },
    {
      id: "BLDPI4.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Transportation):Support improvements to public transport and facilities",
      type: "Child",
    },
    {
      id: "BLDPI4.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Improve environmental quality where possible, and protect communities from harm",
      type: "Child",
    },
    {
      id: "BLDPI4.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Facilitate the development of clean technologies and promote resilient design for a low carbon city",
      type: "Child",
    },
    {
      id: "BLDPI4.7",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Support appropriate renewable energy",
      type: "Child",
    },
    {
      id: "BLDPI4.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Ensure design helps us adapt to environmental change, protect people, wildlife, built and natural environments",
      type: "Child",
    },
    {
      id: "BLDPI4.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Manage potential flood risk in built-up areas",
      type: "Child",
    },
    {
      id: "BLDPI5.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Better looking places",
      type: "Child",
    },
    {
      id: "BLDPI5.4",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):A richer mixture of wildlife and plants",
      type: "Child",
    },
    {
      id: "BLDPI5.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved connections to places",
      type: "Child",
    },
    {
      id: "BLDPI5.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Safer routes for walking and cycling",
      type: "Child",
    },
    {
      id: "BLDPI5.7",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Helping to prevent flooding",
      type: "Child",
    },
    {
      id: "BLDPI5.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved health and wellbeing",
      type: "Child",
    },
    {
      id: "BLDPI5.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Protect and improve open spaces, community greenways, natural green spaces, the Lagan Valley Regional Park, and the Belfast Hills",
      type: "Child",
    },
    {
      id: "BLDPI5.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Ensure developers help provide ‘green and blue’ networks close to residential developments",
      type: "Child",
    },
    {
      id: "BLDPI5.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Natural heritage):Protect existing trees and encourage new trees across Belfast",
      type: "Child",
    },
    {
      id: "BLDPO1",
      display: "Growing Belfast",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Growing Belfast",
      type: "Parent",
    },
    {
      id: "BLDPO2",
      display: "Shaping a Liveable Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Shaping a liveable place",
      type: "Parent",
    },
    {
      id: "BLDPO3",
      display: "Creating a Vibrant Economy",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Creating a vibrant economy",
      type: "Parent",
    },
    {
      id: "BLDPO4",
      display: "Connected, Resilient Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A smart connected, resilient place",
      type: "Parent",
    },
    {
      id: "BLDPO5",
      display: "Green & Active Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A green and active place",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO3",
      display: "Responsible Media",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Enhance responsible media reporting on suicide",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO9",
      display: "Effective Support",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure the provision of effective support for those who are exposed to suicide or suicidal behaviour",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Work with the All Party Group on Suicide Prevention to build further societal commitment to reduce suicide and selfharm",
      type: "Child",
    },
    {
      id: "PLSPA1.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote UK-wide & North / South cooperation on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA1.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop a joined up framework across government to support the wellbeing of children and young people in educational settings and beyond. This will include the development and implementation of policies and guidance which promote emotional resilience in educational settings",
      type: "Child",
    },
    {
      id: "PLSPA1.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote mental health & wellbeing through arts, culture, leisure, libraries and sport",
      type: "Child",
    },
    {
      id: "PLSPA1.6",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Implement suicide prevention and self-harm elements of the Improving Health within Criminal Justice Strategy",
      type: "Child",
    },
    {
      id: "PLSPA2.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop and deliver public education programmes: to increase awareness of the signs and symptoms of emotional distress and of the appropriate response; to reduce stigma around mental illness; and to encourage help-seeking behaviour",
      type: "Child",
    },
    {
      id: "PLSPA2.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote awareness of available support, including de-escalation and bereavement services",
      type: "Child",
    },
    {
      id: "PLSPA2.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "3 Promote positive use of the internet & social media in relation to suicide prevention & selfharm reduction",
      type: "Child",
    },
    {
      id: "PLSPA3.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote use of, and compliance with, media guidelines on the reporting of suicide; review & update guidelines as necessary",
      type: "Child",
    },
    {
      id: "PLSPA3.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Monitor media reporting and challenge inappropriate reporting",
      type: "Child",
    },
    {
      id: "PLSPA3.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote best practice guidelines on memorials/ public gatherings/ social media postings",
      type: "Child",
    },
    {
      id: "PLSPA3.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure that Northern Ireland is part of the UK-wide arrangements to promote & encourage sensitive reporting of suicide online and in social media, and for making the internet safer for those who are vulnerable to suicide",
      type: "Child",
    },
    {
      id: "PLSPA4.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support, encourage and procure communitybased suicide prevention services",
      type: "Child",
    },
    {
      id: "PLSPA4.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure effective co-ordination with Council community planning on suicide prevention by embedding suicide prevention in all District Council “Community Plans”",
      type: "Child",
    },
    {
      id: "PLSPA4.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Deliver a multi-sectoral training framework in suicide intervention for people working in the community",
      type: "Child",
    },
    {
      id: "PLSPA4.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide practical support to employers on mentally healthy workplaces and supporting employees experiencing emotional crisis",
      type: "Child",
    },
    {
      id: "PLSPA4.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Encourage universities, colleges, schools and training organisations to promote a culture of help-seeking behaviour and suicide prevention awareness among their students and trainees",
      type: "Child",
    },
    {
      id: "PLSPA5.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "To establish a regional mental health collaborative across HSC Trusts using a Towards Zero Suicide approach and concepts for adult mental health to improve patient safety and to reduce levels of suicide",
      type: "Child",
    },
    {
      id: "PLSPA5.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Continue participation in the National Confidential Inquiry on Suicide (NCISH) & support practice improvement in line with NCISH recommendations",
      type: "Child",
    },
    {
      id: "PLSPA5.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Improve the process for learning from suicide & self-harm related adverse incidents",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA6.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Work with professional groups to encourage safer prescribing and develop policy proposals where restricted access to certain medications demonstrates positive outcomes in terms of reductions in this means of suicide",
      type: "Child",
    },
    {
      id: "PLSPA6.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description: "Ensure safe custody in relation to suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA7.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide timely, accessible de-escalation services for those in emotional crisis or despair",
      type: "Child",
    },
    {
      id: "PLSPA7.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop and implement a regional training framework which will include suicide awareness and suicide intervention for HSC staff with a view to achieving 50% staff trained (concentrating on those working in primary care, emergency services, & mental health / addiction services) by 2022. (new action)",
      type: "Child",
    },
    {
      id: "PLSPA7.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Encourage health and social care professionals, & others, who provide services to people at risk of suicide to (as a matter of course) seek patient / client permission to engage trusted family or friends in their safety planning for that person",
      type: "Child",
    },
    {
      id: "PLSPA7.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Embed suicide prevention in drug and alcohol policy and services",
      type: "Child",
    },
    {
      id: "PLSPA8.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Improve access to, and uptake of, a range oftherapies and interventions for those who self-harm in line with NICE guidance on the management of self-harm and relevant guidance on other associated conditions",
      type: "Child",
    },
    {
      id: "PLSPA8.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Maintain the NI Self-harm Registry to determine trends over time, inform service provision, & improve understanding of selfharming behaviour",
      type: "Child",
    },
    {
      id: "PLSPA8.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Embed psychological support in the new mental health liaison service",
      type: "Child",
    },
    {
      id: "PLSPA8.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure all people who attend the ED with self-harm are offered a psychosocial assessment by the new mental health liaison service",
      type: "Child",
    },
    {
      id: "PLSPA9.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide a consistent, compassionate approach to supporting those bereaved/affected by suicide, including family and social circle",
      type: "Child",
    },
    {
      id: "PLSPA9.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Facilitate support networks for people bereaved by suicide and their role in influencing policy and service delivery",
      type: "Child",
    },
    {
      id: "PLSPA9.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide support and reflective practice for professionals who experience loss of patient or client to suicide and their work on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA9.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support families and other informal carers in caring for suicidal individuals to help them manage suicidal behaviours and emotional distress; and to look after their own mental wellbeing",
      type: "Child",
    },
    {
      id: "PLSPA9.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure collation of accurate real time information on probable suicides through the Sudden Death Notification process",
      type: "Child",
    },
    {
      id: "PLSPA9.6",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Identify emerging suicide clusters and act promptly to reduce the risk of further suicides in the community through proportionate activation of multi-agency Community Response Plans",
      type: "Child",
    },
    {
      id: "PLSPA9.7",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Implement recommendations of the PHA review of the Sudden Deaths Notification process and the Community Response Plan process",
      type: "Child",
    },
    {
      id: "PLSPA9.8",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure contracted organisations adhere to PHA Quality Standards of Services promoting mental and emotional wellbeing and suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA9.9",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support for school staff to help them provide effective support to children & young people affected by suicide or suicidal behaviours at home",
      type: "Child",
    },
    {
      id: "PLSPA10.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Identify priorities for local research into suicide, self-harm & their prevention including data linkage; promote, encourage and commission local research",
      type: "Child",
    },
    {
      id: "PLSPA10.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support promotion and delivery of the 2019 International Association for Suicide Prevention Congress",
      type: "Child",
    },
    {
      id: "PLSPA10.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Conduct ongoing surveillance to monitor changing behaviours or trends in suicide and self-harm means to inform preventative action, particularly where new methods emerge",
      type: "Child",
    },
    {
      id: "ACIPR1",
      display: "A City Belonging",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description: "A City Belonging",
      type: "Parent",
    },
    {
      id: "ACIPR2",
      display: "A City Challenging",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description: "A City Challenging",
      type: "Parent",
    },
    {
      id: "ACIPR3",
      display: "A City Creating",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description: "A City Creating",
      type: "Parent",
    },
    {
      id: "ACIPR4",
      display: "A City Exploring",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description: "A City Exploring",
      type: "Parent",
    },
    {
      id: "ACIPR1.3",
      display: "3",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Protecting, promoting and using cultural heritagein all its dimensions, both tangible and intangible, including the plurality of the city’s cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR1.4",
      display: "4",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Enabling a sense of belonging and sense of place through cultural engagement to help encourage a strong civic identity that people can share and celebrate",
      type: "Child",
    },
    {
      id: "ACIPR2.1",
      display: "5",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Embedding cultural impact in citydevelopment and local place-making",
      type: "Child",
    },
    {
      id: "ACIPR2.2",
      display: "6",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in connected, resilient and sustainable infrastructure of quality cultural spaces across the city. This will also include digital spaces",
      type: "Child",
    },
    {
      id: "ACIPR2.3",
      display: "7",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Supporting high quality cultural events and activities that are accessible, diverse and inclusive",
      type: "Child",
    },
    {
      id: "ACIPR2.4",
      display: "8",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Transforming underused public spaces into vibrant and diverse cultural destinations",
      type: "Child",
    },
    {
      id: "ACIPR3.1",
      display: "9",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the autonomy of the creative sector to explore and shape the city’s evolving, rich and multiple cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR3.2",
      display: "10",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Supporting cultural excellence, cultural planning and cultural entrepreneurialism by providing support for artistic innovation and improved networking",
      type: "Child",
    },
    {
      id: "ACIPR3.3",
      display: "11",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in a stronger and more sustainable cultural sector by supporting established and new creative practitioners to work beyond boundaries. This will create the environment where risks can be taken across a broader range of activities, sectors and disciplines",
      type: "Child",
    },
    {
      id: "ACIPR3.4",
      display: "12",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Empowering the innovative capacity of the creative economy to connect technology and society",
      type: "Child",
    },
    {
      id: "ACIPR4.1",
      display: "13",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Strengthening our city, regional and international cultural networks",
      type: "Child",
    },
    {
      id: "ACIPR4.2",
      display: "14",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Growing our sustainable cultural tourism product through a creative approach that respects the city’s heritage and communities",
      type: "Child",
    },
    {
      id: "ACIPR4.3",
      display: "15",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Encouraging environmental responsibility and resilience by understanding and adapting cultural behaviours",
      type: "Child",
    },
    {
      id: "ACIPR4.4",
      display: "16",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the contribution of both public and private cultural sectors to inclusive economic growth",
      type: "Child",
    },
  ],
  links: [],
};
var westlinkMaritime = {
  nodes: [
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI30",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our attractiveness as a destination",
      type: "Child",
    },
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },
    {
      id: "UNSDG8",
      display: "Work & Economic Growth",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Decent Work and Economic Growth",
      type: "Parent",
    },
    {
      id: "UNSDG9",
      display: "Industry, Innovation & Infrastructure",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Industry, Innovation and Infrastructure",
      type: "Parent",
    },
    {
      id: "UNSDG10",
      display: "Reduced Inequality",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Reduced Inequality",
      type: "Parent",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },
    {
      id: "UNSDG12",
      display: "Consumption & Production",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Responsible Consumption and Production",
      type: "Parent",
    },
    {
      id: "UNSDG13",
      display: "Climate Action",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Climate Action",
      type: "Parent",
    },
    {
      id: "UNSDG16",
      display: "Peace & Justice",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Peace and Justice Strong Institutions",
      type: "Parent",
    },
    {
      id: "UNSDG17",
      display: "Achieve",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Partnerships to achieve the Goal",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },
    {
      id: "UNSDT3.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
      type: "Child",
    },

    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },

    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },

    {
      id: "UNSDT12.8",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
      type: "Child",
    },
    {
      id: "UNSDT12.b",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT13.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
      type: "Child",
    },
    {
      id: "UNSDT13.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
      type: "Child",
    },

    {
      id: "BGBIP1",
      display: "Biodiverse",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Biodiverse",
      type: "Parent",
    },
    {
      id: "BGBIP3",
      display: "Urban Environment",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Integrated into the urban environment",
      type: "Parent",
    },
    {
      id: "BGBIP5",
      display: "Appropiately Funded",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Appropriately funded",
      type: "Parent",
    },
    {
      id: "BGBIB1",
      display: "Community Cohesion",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Supports community cohesion",
      type: "Parent",
    },
    {
      id: "BGBIB2",
      display: "Drop in Theft",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Increases safety through 24% drop in burglaries and 69% drop in robberies",
      type: "Parent",
    },
    {
      id: "BGBIB3",
      display: "Setting, Character & Design Quality",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Contributes to place setting, character and design quality",
      type: "Parent",
    },
    {
      id: "BGBIB4",
      display: "Safe Movement",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improve connectivity for safe movement across the city",
      type: "Parent",
    },
    {
      id: "BGBIB6",
      display: "Recreation",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Enables formal and informal recreation",
      type: "Parent",
    },
    {
      id: "BGBIB10",
      display: "Drainage and Flood Management",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Supports sustainable approaches to drainage and flood risk management/ improves air quality",
      type: "Parent",
    },
    {
      id: "BGBIB11",
      display: "Creates Public Value",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "High rate of return on investment through job creation, tourism expenditure, social cost saving and wellbeing benefits (Every £1 of investment create £2 in public value)",
      type: "Parent",
    },
    {
      id: "BGBIB12",
      display: "Tourism",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Attracts visitors and tourists (£1.66-£2.78 expenditure per visit)",
      type: "Parent",
    },
    {
      id: "RESIL1",
      display: "Climate Resilience",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate resilience",
      type: "Parent",
    },
    {
      id: "RESIL3",
      display: "C&Y People",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Children and young people",
      type: "Parent",
    },
    {
      id: "RESIL1.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Reducing your carbon footprint",
      type: "Child",
    },
    {
      id: "RESIL2.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Walking, cycling and public transport",
      type: "Child",
    },
    {
      id: "RESIL3.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Shaping your city",
      type: "Child",
    },
    {
      id: "RESIL3.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate Conversation",
      type: "Child",
    },
    {
      id: "RESSS1.1",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Economic recovery capacity: inequality and competitiveness",
      type: "Child",
    },
    {
      id: "RESSS1.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Dependency on fossil fuels and carbon intensive systems",
      type: "Child",
    },
    {
      id: "RESSS1.6",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Segregation and division",
      type: "Child",
    },
    {
      id: "RESSS1.7",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Mental health and use of prescription drugs",
      type: "Child",
    },
    {
      id: "RESSS2.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Climate change",
      type: "Child",
    },
    {
      id: "RESSS2.4",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Flooding and extreme weather events",
      type: "Child",
    },
    {
      id: "ABVFB1",
      display: "Environment & Wellbeing",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Creating a healthy, shared, vibrant and sustainable environment that promotes wellbeing for all, inclusive growth and innovation",
      type: "Parent",
    },
    {
      id: "ABVFB2",
      display: "Sustainable Transport",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Fundamentally changing the centre of Belfast to prioritise integrated walking, cycling and public transport and end the dominance of the car",
      type: "Parent",
    },
    {
      id: "ABVFB3",
      display: "Resilience & Heritage",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Providing lively, safe and green streets linking inclusive shared spaces to promote resilience and enhance our built heritage",
      type: "Parent",
    },
    {
      id: "ABVFB4",
      display: "Improved Access",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Removing severance and barriers to movement between the centre of Belfast and the surrounding communities to improve access for all",
      type: "Parent",
    },
    {
      id: "BCLDP1",
      display: "Support Economic & Social Needs",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a 15 year plan framework to support economic and social needs in the city, in line with regional strategies and policies, while providing the delivery of sustainable development",
      type: "Parent",
    },
    {
      id: "BCLDP2",
      display: "Facilitate Growth",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Facilitate growth by coordinating public and private investment to encourage development where it can be of most benefit to the wellbeing of the community",
      type: "Parent",
    },
    {
      id: "BLDPI1.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Growing Belfast):Identify land to support the creation of up to 46,000 new jobs",
      type: "Child",
    },
    {
      id: "BLDPI1.2",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Growing Belfast):Increase the city's population by 66,000 to over 400,000 by 2035",
      type: "Child",
    },
    {
      id: "BLDPI2.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure our main routes and arrival points are attractive",
      type: "Child",
    },
    {
      id: "BLDPI2.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Protect and enhance our older buildings",
      type: "Child",
    },
    {
      id: "BLDPI2.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Make the most of our unique features",
      type: "Child",
    },
    {
      id: "BLDPI3.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Support and guide tourism development to enhance the city centre as the regional economic driver",
      type: "Child",
    },
    {
      id: "BLDPI3.11",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Support city centre living",
      type: "Child",
    },
    {
      id: "BLDPI3.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Promote shared space",
      type: "Child",
    },
    {
      id: "BLDPI3.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Regenerate key places within the city centre",
      type: "Child",
    },
    {
      id: "BLDPI4.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Infrastructure):Aim to ensure there is appropriate infrastructure to meet our needs whilst protecting our environment",
      type: "Child",
    },
    {
      id: "BLDPI4.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Improve environmental quality where possible, and protect communities from harm",
      type: "Child",
    },
    {
      id: "BLDPI4.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Manage potential flood risk in built-up areas",
      type: "Child",
    },
    {
      id: "BLDPI5.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Better looking places",
      type: "Child",
    },
    {
      id: "BLDPI5.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved connections to places",
      type: "Child",
    },
    {
      id: "BLDPI5.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Safer routes for walking and cycling",
      type: "Child",
    },
    {
      id: "BLDPI5.7",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Helping to prevent flooding",
      type: "Child",
    },
    {
      id: "BLDPI5.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved health and wellbeing",
      type: "Child",
    },
    {
      id: "BLDPI5.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Protect and improve open spaces, community greenways, natural green spaces, the Lagan Valley Regional Park, and the Belfast Hills",
      type: "Child",
    },
    {
      id: "BLDPO1",
      display: "Growing Belfast",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Growing Belfast",
      type: "Parent",
    },
    {
      id: "BLDPO2",
      display: "Shaping a Liveable Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Shaping a liveable place",
      type: "Parent",
    },
    {
      id: "BLDPO3",
      display: "Creating a Vibrant Economy",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Creating a vibrant economy",
      type: "Parent",
    },
    {
      id: "BLDPO5",
      display: "Green & Active Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A green and active place",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPA1.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop a joined up framework across government to support the wellbeing of children and young people in educational settings and beyond. This will include the development and implementation of policies and guidance which promote emotional resilience in educational settings",
      type: "Child",
    },
    {
      id: "PLSPA1.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote mental health & wellbeing through arts, culture, leisure, libraries and sport",
      type: "Child",
    },
    {
      id: "PLSPA2.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop and deliver public education programmes: to increase awareness of the signs and symptoms of emotional distress and of the appropriate response; to reduce stigma around mental illness; and to encourage help-seeking behaviour",
      type: "Child",
    },
    {
      id: "ACIPR1",
      display: "A City Belonging",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description: "A City Belonging",
      type: "Parent",
    },
    {
      id: "ACIPR2",
      display: "A City Challenging",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description: "A City Challenging",
      type: "Parent",
    },
    {
      id: "ACIPR3",
      display: "A City Creating",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description: "A City Creating",
      type: "Parent",
    },
    {
      id: "ACIPR4",
      display: "A City Exploring",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description: "A City Exploring",
      type: "Parent",
    },
    {
      id: "ACIPR1.3",
      display: "3",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Protecting, promoting and using cultural heritagein all its dimensions, both tangible and intangible, including the plurality of the city’s cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR1.4",
      display: "4",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Enabling a sense of belonging and sense of place through cultural engagement to help encourage a strong civic identity that people can share and celebrate",
      type: "Child",
    },
    {
      id: "ACIPR2.1",
      display: "5",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Embedding cultural impact in citydevelopment and local place-making",
      type: "Child",
    },
    {
      id: "ACIPR2.2",
      display: "6",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in connected, resilient and sustainable infrastructure of quality cultural spaces across the city. This will also include digital spaces",
      type: "Child",
    },
    {
      id: "ACIPR2.3",
      display: "7",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Supporting high quality cultural events and activities that are accessible, diverse and inclusive",
      type: "Child",
    },
    {
      id: "ACIPR2.4",
      display: "8",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Transforming underused public spaces into vibrant and diverse cultural destinations",
      type: "Child",
    },
    {
      id: "ACIPR3.1",
      display: "9",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the autonomy of the creative sector to explore and shape the city’s evolving, rich and multiple cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR3.2",
      display: "10",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Supporting cultural excellence, cultural planning and cultural entrepreneurialism by providing support for artistic innovation and improved networking",
      type: "Child",
    },
    {
      id: "ACIPR3.3",
      display: "11",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in a stronger and more sustainable cultural sector by supporting established and new creative practitioners to work beyond boundaries. This will create the environment where risks can be taken across a broader range of activities, sectors and disciplines",
      type: "Child",
    },
    {
      id: "ACIPR3.4",
      display: "12",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Empowering the innovative capacity of the creative economy to connect technology and society",
      type: "Child",
    },
    {
      id: "ACIPR4.1",
      display: "13",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Strengthening our city, regional and international cultural networks",
      type: "Child",
    },
    {
      id: "ACIPR4.2",
      display: "14",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Growing our sustainable cultural tourism product through a creative approach that respects the city’s heritage and communities",
      type: "Child",
    },
    {
      id: "ACIPR4.3",
      display: "15",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Encouraging environmental responsibility and resilience by understanding and adapting cultural behaviours",
      type: "Child",
    },
    {
      id: "ACIPR4.4",
      display: "16",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the contribution of both public and private cultural sectors to inclusive economic growth",
      type: "Child",
    },
  ],
  links: [],
};
var westlinkImprovedData = {
  nodes: [
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },
    {
      id: "UNSDG8",
      display: "Work & Economic Growth",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Decent Work and Economic Growth",
      type: "Parent",
    },
    {
      id: "UNSDG9",
      display: "Industry, Innovation & Infrastructure",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Industry, Innovation and Infrastructure",
      type: "Parent",
    },
    {
      id: "UNSDG10",
      display: "Reduced Inequality",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Reduced Inequality",
      type: "Parent",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },

    {
      id: "UNSDG16",
      display: "Peace & Justice",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Peace and Justice Strong Institutions",
      type: "Parent",
    },
    {
      id: "UNSDG17",
      display: "Achieve",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Partnerships to achieve the Goal",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },
    {
      id: "UNSDT3.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
      type: "Child",
    },

    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "UNSDT9.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities",
      type: "Child",
    },

    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },

    {
      id: "BGBIP4",
      display: "Designed & Managed",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Well designed and managed",
      type: "Parent",
    },
    {
      id: "BGBIB4",
      display: "Safe Movement",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improve connectivity for safe movement across the city",
      type: "Parent",
    },
    {
      id: "RESSS1.7",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Mental health and use of prescription drugs",
      type: "Child",
    },
    {
      id: "ABVFB1",
      display: "Environment & Wellbeing",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Creating a healthy, shared, vibrant and sustainable environment that promotes wellbeing for all, inclusive growth and innovation",
      type: "Parent",
    },
    {
      id: "BLDPI4.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Infrastructure):Aim to ensure there is appropriate infrastructure to meet our needs whilst protecting our environment",
      type: "Child",
    },
    {
      id: "BLDPI4.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Improve environmental quality where possible, and protect communities from harm",
      type: "Child",
    },
    {
      id: "BLDPI5.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved health and wellbeing",
      type: "Child",
    },
    {
      id: "BLDPO2",
      display: "Shaping a Liveable Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Shaping a liveable place",
      type: "Parent",
    },
    {
      id: "BLDPO3",
      display: "Creating a Vibrant Economy",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Creating a vibrant economy",
      type: "Parent",
    },
    {
      id: "BLDPO4",
      display: "Smart Connected, Resilient Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A smart connected, resilient place",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO3",
      display: "Responsible Media",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Enhance responsible media reporting on suicide",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO9",
      display: "Effective Support",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure the provision of effective support for those who are exposed to suicide or suicidal behaviour",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Work with the All Party Group on Suicide Prevention to build further societal commitment to reduce suicide and selfharm",
      type: "Child",
    },
    {
      id: "PLSPA1.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote UK-wide & North / South cooperation on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA2.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote awareness of available support, including de-escalation and bereavement services",
      type: "Child",
    },
    {
      id: "PLSPA3.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote best practice guidelines on memorials/ public gatherings/ social media postings",
      type: "Child",
    },
    {
      id: "PLSPA5.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Improve the process for learning from suicide & self-harm related adverse incidents",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA6.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description: "Ensure safe custody in relation to suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA7.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide timely, accessible de-escalation services for those in emotional crisis or despair",
      type: "Child",
    },
  ],
  links: [],
};
var westlinkReflections = {
  nodes: [
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI29",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase environmental sustainability",
      type: "Child",
    },
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },

    {
      id: "UNSDG9",
      display: "Industry, Innovation & Infrastructure",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Industry, Innovation and Infrastructure",
      type: "Parent",
    },
    {
      id: "UNSDG10",
      display: "Reduced Inequality",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Reduced Inequality",
      type: "Parent",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },

    {
      id: "UNSDG13",
      display: "Climate Action",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Climate Action",
      type: "Parent",
    },
    {
      id: "UNSDG16",
      display: "Peace & Justice",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Peace and Justice Strong Institutions",
      type: "Parent",
    },
    {
      id: "UNSDG17",
      display: "Achieve",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Partnerships to achieve the Goal",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },

    {
      id: "UNSDT3.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },

    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },

    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },

    {
      id: "UNSDT12.8",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
      type: "Child",
    },
    {
      id: "UNSDT12.b",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT13.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
      type: "Child",
    },
    {
      id: "UNSDT13.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
      type: "Child",
    },

    {
      id: "BGBIB1",
      display: "Community Cohesion",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Supports community cohesion",
      type: "Parent",
    },
    {
      id: "BGBIB3",
      display: "Setting, Character & Design Quality",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Contributes to place setting, character and design quality",
      type: "Parent",
    },
    {
      id: "BGBIB4",
      display: "Safe Movement",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improve connectivity for safe movement across the city",
      type: "Parent",
    },
    {
      id: "BGBIB6",
      display: "Recreation",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Enables formal and informal recreation",
      type: "Parent",
    },
    {
      id: "BGBIB10",
      display: "Drainage and Flood Management",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Supports sustainable approaches to drainage and flood risk management/ improves air quality",
      type: "Parent",
    },
    {
      id: "RESIL1",
      display: "Climate Resilience",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate resilience",
      type: "Parent",
    },
    {
      id: "RESIL3",
      display: "C&Y People",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Children and young people",
      type: "Parent",
    },
    {
      id: "RESIL1.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Reducing your carbon footprint",
      type: "Child",
    },
    {
      id: "RESIL3.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Shaping your city",
      type: "Child",
    },
    {
      id: "RESIL3.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate Conversation",
      type: "Child",
    },
    {
      id: "RESSS1.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Dependency on fossil fuels and carbon intensive systems",
      type: "Child",
    },
    {
      id: "RESSS1.6",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Segregation and division",
      type: "Child",
    },
    {
      id: "RESSS1.7",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Mental health and use of prescription drugs",
      type: "Child",
    },
    {
      id: "RESSS2.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Climate change",
      type: "Child",
    },
    {
      id: "RESSS2.4",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Flooding and extreme weather events",
      type: "Child",
    },
    {
      id: "ABVFB1",
      display: "Environment & Wellbeing",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Creating a healthy, shared, vibrant and sustainable environment that promotes wellbeing for all, inclusive growth and innovation",
      type: "Parent",
    },
    {
      id: "BCLDP4",
      display: "Inclusive Development",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide an opportunity for all stakeholders, including the public, to have a say about where and how development within the local area should take place",
      type: "Parent",
    },
    {
      id: "BLDPI2.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Protect and enhance our older buildings",
      type: "Child",
    },
    {
      id: "BLDPI2.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Make the most of our unique features",
      type: "Child",
    },
    {
      id: "BLDPI3.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Promote shared space",
      type: "Child",
    },
    {
      id: "BLDPI3.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Regenerate key places within the city centre",
      type: "Child",
    },
    {
      id: "BLDPI4.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Improve environmental quality where possible, and protect communities from harm",
      type: "Child",
    },
    {
      id: "BLDPI4.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Facilitate the development of clean technologies and promote resilient design for a low carbon city",
      type: "Child",
    },
    {
      id: "BLDPI4.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Manage potential flood risk in built-up areas",
      type: "Child",
    },
    {
      id: "BLDPI5.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Better looking places",
      type: "Child",
    },
    {
      id: "BLDPI5.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved connections to places",
      type: "Child",
    },
    {
      id: "BLDPI5.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved health and wellbeing",
      type: "Child",
    },
    {
      id: "BLDPO2",
      display: "Shaping a Liveable Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Shaping a liveable place",
      type: "Parent",
    },
    {
      id: "BLDPO4",
      display: "Smart Connected, Resilient Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A smart connected, resilient place",
      type: "Parent",
    },
    {
      id: "BLDPO5",
      display: "Green & Active Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A green and active place",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop a joined up framework across government to support the wellbeing of children and young people in educational settings and beyond. This will include the development and implementation of policies and guidance which promote emotional resilience in educational settings",
      type: "Child",
    },
    {
      id: "ACIPR1.3",
      display: "3",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Protecting, promoting and using cultural heritagein all its dimensions, both tangible and intangible, including the plurality of the city’s cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR1.4",
      display: "4",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Enabling a sense of belonging and sense of place through cultural engagement to help encourage a strong civic identity that people can share and celebrate",
      type: "Child",
    },
    {
      id: "ACIPR2.1",
      display: "5",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Embedding cultural impact in citydevelopment and local place-making",
      type: "Child",
    },
    {
      id: "ACIPR2.2",
      display: "6",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in connected, resilient and sustainable infrastructure of quality cultural spaces across the city. This will also include digital spaces",
      type: "Child",
    },
    {
      id: "ACIPR2.3",
      display: "7",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Supporting high quality cultural events and activities that are accessible, diverse and inclusive",
      type: "Child",
    },
    {
      id: "ACIPR2.4",
      display: "8",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Transforming underused public spaces into vibrant and diverse cultural destinations",
      type: "Child",
    },
    {
      id: "ACIPR3.1",
      display: "9",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the autonomy of the creative sector to explore and shape the city’s evolving, rich and multiple cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR3.2",
      display: "10",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Supporting cultural excellence, cultural planning and cultural entrepreneurialism by providing support for artistic innovation and improved networking",
      type: "Child",
    },
    {
      id: "ACIPR3.3",
      display: "11",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in a stronger and more sustainable cultural sector by supporting established and new creative practitioners to work beyond boundaries. This will create the environment where risks can be taken across a broader range of activities, sectors and disciplines",
      type: "Child",
    },
    {
      id: "ACIPR4.2",
      display: "14",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Growing our sustainable cultural tourism product through a creative approach that respects the city’s heritage and communities",
      type: "Child",
    },
    {
      id: "ACIPR4.3",
      display: "15",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Encouraging environmental responsibility and resilience by understanding and adapting cultural behaviours",
      type: "Child",
    },
  ],
  links: [],
};
var westlinkDesignPrinciples = {
  nodes: [
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },

    {
      id: "UNSDG9",
      display: "Industry, Innovation & Infrastructure",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Industry, Innovation and Infrastructure",
      type: "Parent",
    },
    {
      id: "UNSDG10",
      display: "Reduced Inequality",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Reduced Inequality",
      type: "Parent",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },

    {
      id: "UNSDG13",
      display: "Climate Action",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Climate Action",
      type: "Parent",
    },
    {
      id: "UNSDG16",
      display: "Peace & Justice",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Peace and Justice Strong Institutions",
      type: "Parent",
    },
    {
      id: "UNSDG17",
      display: "Achieve",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Partnerships to achieve the Goal",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },

    {
      id: "UNSDT3.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "UNSDT11.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries",
      type: "Child",
    },
    {
      id: "UNSDT11.6",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },

    {
      id: "UNSDT12.8",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
      type: "Child",
    },

    {
      id: "UNSDT13.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
      type: "Child",
    },
    {
      id: "UNSDT13.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
      type: "Child",
    },

    {
      id: "UNSDT17.14",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description: "Enhance policy coherence for sustainable development",
      type: "Child",
    },
    {
      id: "BGBIP4",
      display: "Designed & Managed",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Well designed and managed",
      type: "Parent",
    },
    {
      id: "BGBIB4",
      display: "Safe Movement",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improve connectivity for safe movement across the city",
      type: "Parent",
    },
    {
      id: "RESIL1",
      display: "Climate Resilience",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate resilience",
      type: "Parent",
    },
    {
      id: "RESIL2",
      display: "Connectivity",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Connectivity",
      type: "Parent",
    },
    {
      id: "RESIL3",
      display: "C&Y People",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Children and young people",
      type: "Parent",
    },
    {
      id: "RESIL1.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Reducing your carbon footprint",
      type: "Child",
    },
    {
      id: "RESIL1.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description:
        "Better air quality - Risk to health and enjoyment of the city",
      type: "Child",
    },
    {
      id: "RESIL1.3",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "One million trees",
      type: "Child",
    },
    {
      id: "RESIL2.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Walking, cycling and public transport",
      type: "Child",
    },
    {
      id: "RESIL3.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Shaping your city",
      type: "Child",
    },
    {
      id: "RESIL3.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate Conversation",
      type: "Child",
    },
    {
      id: "RESSS1.1",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Economic recovery capacity: inequality and competitiveness",
      type: "Child",
    },
    {
      id: "RESSS1.2",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Population change",
      type: "Child",
    },
    {
      id: "RESSS1.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Dependency on fossil fuels and carbon intensive systems",
      type: "Child",
    },
    {
      id: "RESSS1.7",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Mental health and use of prescription drugs",
      type: "Child",
    },
    {
      id: "RESSS2.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Climate change",
      type: "Child",
    },
    {
      id: "RESSS2.4",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Flooding and extreme weather events",
      type: "Child",
    },
    {
      id: "ABVFB1",
      display: "Environment & Wellbeing",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Creating a healthy, shared, vibrant and sustainable environment that promotes wellbeing for all, inclusive growth and innovation",
      type: "Parent",
    },
    {
      id: "ABVFB2",
      display: "Sustainable Transport",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Fundamentally changing the centre of Belfast to prioritise integrated walking, cycling and public transport and end the dominance of the car",
      type: "Parent",
    },
    {
      id: "ABVFB4",
      display: "Improved Access",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Removing severance and barriers to movement between the centre of Belfast and the surrounding communities to improve access for all",
      type: "Parent",
    },
    {
      id: "BCLDP1",
      display: "Support Economic & Social Needs",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a 15 year plan framework to support economic and social needs in the city, in line with regional strategies and policies, while providing the delivery of sustainable development",
      type: "Parent",
    },
    {
      id: "BCLDP4",
      display: "Inclusive Development",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide an opportunity for all stakeholders, including the public, to have a say about where and how development within the local area should take place",
      type: "Parent",
    },
    {
      id: "BCLDP5",
      display: "Provide a Framework",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a plan-led framework for rational and consistent decision making by the public, private and community sectors and those affected by development proposals",
      type: "Parent",
    },
    {
      id: "BCLDP6",
      display: "Deliver spatial Aspects",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Deliver the spatial aspects of The Belfast Agenda, the city's Community Plan",
      type: "Parent",
    },
    {
      id: "BLDPI2.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure our main routes and arrival points are attractive",
      type: "Child",
    },
    {
      id: "BLDPI2.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure new development promotes greater connectivity",
      type: "Child",
    },
    {
      id: "BLDPI2.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Protect and enhance our older buildings",
      type: "Child",
    },
    {
      id: "BLDPI2.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Make the most of our unique features",
      type: "Child",
    },
    {
      id: "BLDPI2.14",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Promote high standards of energy efficiency in design",
      type: "Child",
    },
    {
      id: "BLDPI3.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Promote shared space",
      type: "Child",
    },
    {
      id: "BLDPI3.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Regenerate key places within the city centre",
      type: "Child",
    },
    {
      id: "BLDPI4.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Infrastructure):Aim to ensure there is appropriate infrastructure to meet our needs whilst protecting our environment",
      type: "Child",
    },
    {
      id: "BLDPI4.2",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Transportation):Support walking and cycling alongside sustainable transport",
      type: "Child",
    },
    {
      id: "BLDPI4.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Transportation):Support improvements to public transport and facilities",
      type: "Child",
    },
    {
      id: "BLDPI4.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Improve environmental quality where possible, and protect communities from harm",
      type: "Child",
    },
    {
      id: "BLDPI4.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Ensure design helps us adapt to environmental change, protect people, wildlife, built and natural environments",
      type: "Child",
    },
    {
      id: "BLDPI5.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Better looking places",
      type: "Child",
    },
    {
      id: "BLDPI5.4",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):A richer mixture of wildlife and plants",
      type: "Child",
    },
    {
      id: "BLDPI5.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved connections to places",
      type: "Child",
    },
    {
      id: "BLDPI5.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Safer routes for walking and cycling",
      type: "Child",
    },
    {
      id: "BLDPI5.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved health and wellbeing",
      type: "Child",
    },
    {
      id: "BLDPO2",
      display: "Shaping a Liveable Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Shaping a liveable place",
      type: "Parent",
    },
    {
      id: "BLDPO4",
      display: "Smart Connected, Resilient Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A smart connected, resilient place",
      type: "Parent",
    },
    {
      id: "BLDPO5",
      display: "Green & Active Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A green and active place",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "ACIPR1.3",
      display: "3",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Protecting, promoting and using cultural heritagein all its dimensions, both tangible and intangible, including the plurality of the city’s cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR1.4",
      display: "4",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Enabling a sense of belonging and sense of place through cultural engagement to help encourage a strong civic identity that people can share and celebrate",
      type: "Child",
    },
    {
      id: "ACIPR2.1",
      display: "5",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Embedding cultural impact in citydevelopment and local place-making",
      type: "Child",
    },
    {
      id: "ACIPR2.4",
      display: "8",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Transforming underused public spaces into vibrant and diverse cultural destinations",
      type: "Child",
    },
    {
      id: "ACIPR4.3",
      display: "15",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Encouraging environmental responsibility and resilience by understanding and adapting cultural behaviours",
      type: "Child",
    },
  ],
  links: [],
};
var westlinkTechnicalDesignCriteria = {
  nodes: [
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },

    {
      id: "UNSDG9",
      display: "Industry, Innovation & Infrastructure",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Industry, Innovation and Infrastructure",
      type: "Parent",
    },
    {
      id: "UNSDG10",
      display: "Reduced Inequality",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Reduced Inequality",
      type: "Parent",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },

    {
      id: "UNSDG16",
      display: "Peace & Justice",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Peace and Justice Strong Institutions",
      type: "Parent",
    },
    {
      id: "UNSDG17",
      display: "Achieve",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Partnerships to achieve the Goal",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },

    {
      id: "UNSDT3.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
      type: "Child",
    },

    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "UNSDT9.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities",
      type: "Child",
    },

    {
      id: "UNSDT11.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries",
      type: "Child",
    },

    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },

    {
      id: "UNSDT12.8",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
      type: "Child",
    },

    {
      id: "UNSDT17.14",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description: "Enhance policy coherence for sustainable development",
      type: "Child",
    },
    {
      id: "BGBIP4",
      display: "Designed & Managed",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Well designed and managed",
      type: "Parent",
    },
    {
      id: "BGBIB4",
      display: "Safe Movement",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improve connectivity for safe movement across the city",
      type: "Parent",
    },
    {
      id: "RESSS1.7",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Mental health and use of prescription drugs",
      type: "Child",
    },
    {
      id: "RESSS2.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Climate change",
      type: "Child",
    },
    {
      id: "ABVFB1",
      display: "Environment & Wellbeing",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Creating a healthy, shared, vibrant and sustainable environment that promotes wellbeing for all, inclusive growth and innovation",
      type: "Parent",
    },
    {
      id: "BLDPI4.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Infrastructure):Aim to ensure there is appropriate infrastructure to meet our needs whilst protecting our environment",
      type: "Child",
    },
    {
      id: "BLDPI5.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved health and wellbeing",
      type: "Child",
    },
    {
      id: "BLDPO2",
      display: "Shaping a Liveable Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Shaping a liveable place",
      type: "Parent",
    },
    {
      id: "BLDPO4",
      display: "Smart Connected, Resilient Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A smart connected, resilient place",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Work with the All Party Group on Suicide Prevention to build further societal commitment to reduce suicide and selfharm",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
  ],
  links: [],
};
var westlinkDroplets = {
  nodes: [
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI29",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase environmental sustainability",
      type: "Child",
    },
    {
      id: "PFGVI30",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our attractiveness as a destination",
      type: "Child",
    },
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },
    {
      id: "UNSDG8",
      display: "Work & Economic Growth",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Decent Work and Economic Growth",
      type: "Parent",
    },
    {
      id: "UNSDG9",
      display: "Industry, Innovation & Infrastructure",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Industry, Innovation and Infrastructure",
      type: "Parent",
    },
    {
      id: "UNSDG10",
      display: "Reduced Inequality",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Reduced Inequality",
      type: "Parent",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },
    {
      id: "UNSDG12",
      display: "Consumption & Production",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Responsible Consumption and Production",
      type: "Parent",
    },
    {
      id: "UNSDG13",
      display: "Climate Action",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Climate Action",
      type: "Parent",
    },
    {
      id: "UNSDG16",
      display: "Peace & Justice",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Peace and Justice Strong Institutions",
      type: "Parent",
    },
    {
      id: "UNSDG17",
      display: "Achieve",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Partnerships to achieve the Goal",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },

    {
      id: "UNSDT3.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "UNSDT9.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },

    {
      id: "UNSDT11.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries",
      type: "Child",
    },
    {
      id: "UNSDT11.6",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },

    {
      id: "UNSDT12.8",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
      type: "Child",
    },
    {
      id: "UNSDT12.b",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT13.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
      type: "Child",
    },
    {
      id: "UNSDT13.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
      type: "Child",
    },

    {
      id: "UNSDT16.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Ensure responsive, inclusive, participatory and representative decision-making at all levels",
      type: "Child",
    },

    {
      id: "BGBIP1",
      display: "Biodiverse",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Biodiverse",
      type: "Parent",
    },
    {
      id: "BGBIP2",
      display: "Network",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Planned, interconnected network",
      type: "Parent",
    },
    {
      id: "BGBIP3",
      display: "Urban Environment",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Integrated into the urban environment",
      type: "Parent",
    },
    {
      id: "BGBIP4",
      display: "Designed & Managed",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Well designed and managed",
      type: "Parent",
    },
    {
      id: "BGBIP5",
      display: "Appropiately Funded",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Appropriately funded",
      type: "Parent",
    },
    {
      id: "BGBIB1",
      display: "Community Cohesion",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Supports community cohesion",
      type: "Parent",
    },
    {
      id: "BGBIB2",
      display: "Drop in Theft",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Increases safety through 24% drop in burglaries and 69% drop in robberies",
      type: "Parent",
    },
    {
      id: "BGBIB3",
      display: "Setting, Character & Design Quality",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Contributes to place setting, character and design quality",
      type: "Parent",
    },
    {
      id: "BGBIB4",
      display: "Safe Movement",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improve connectivity for safe movement across the city",
      type: "Parent",
    },
    {
      id: "BGBIB5",
      display: "Health Benefits",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Provides demonstrable cardio, respiratory and mental health benefits (24% more likely to walk, run, cycle if live within 400m of green infrastructure)",
      type: "Parent",
    },
    {
      id: "BGBIB6",
      display: "Recreation",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Enables formal and informal recreation",
      type: "Parent",
    },
    {
      id: "BGBIB7",
      display: "Improve Air Quality",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improves air quality in terms of NOX, PM2.5 and PM10",
      type: "Parent",
    },
    {
      id: "BGBIB8",
      display: "Space for Biodiversity",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Provides space for biodiversity",
      type: "Parent",
    },
    {
      id: "BGBIB9",
      display: "Reduce Urban Temperature",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Reduced the heat island effect (increase of 10% green space can reduce urban temperature by up to 3 degrees celsius)",
      type: "Parent",
    },
    {
      id: "BGBIB10",
      display: "Drainage and Flood Management",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Supports sustainable approaches to drainage and flood risk management/ improves air quality",
      type: "Parent",
    },
    {
      id: "BGBIB11",
      display: "Creates Public Value",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "High rate of return on investment through job creation, tourism expenditure, social cost saving and wellbeing benefits (Every £1 of investment create £2 in public value)",
      type: "Parent",
    },
    {
      id: "BGBIB12",
      display: "Tourism",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Attracts visitors and tourists (£1.66-£2.78 expenditure per visit)",
      type: "Parent",
    },
    {
      id: "BGBIB13",
      display: "Elevated Property Prices",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Elevated property prices (5-7% increase)",
      type: "Parent",
    },
    {
      id: "RESIL1",
      display: "Climate Resilience",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate resilience",
      type: "Parent",
    },
    {
      id: "RESIL2",
      display: "Connectivity",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Connectivity",
      type: "Parent",
    },
    {
      id: "RESIL3",
      display: "C&Y People",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Children and young people",
      type: "Parent",
    },
    {
      id: "RESIL1.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Reducing your carbon footprint",
      type: "Child",
    },
    {
      id: "RESIL1.3",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "One million trees",
      type: "Child",
    },
    {
      id: "RESIL2.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Walking, cycling and public transport",
      type: "Child",
    },
    {
      id: "RESIL3.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Shaping your city",
      type: "Child",
    },
    {
      id: "RESIL3.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate Conversation",
      type: "Child",
    },
    {
      id: "RESSS1.1",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Economic recovery capacity: inequality and competitiveness",
      type: "Child",
    },
    {
      id: "RESSS1.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Dependency on fossil fuels and carbon intensive systems",
      type: "Child",
    },
    {
      id: "RESSS1.4",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Prevalence of car use",
      type: "Child",
    },
    {
      id: "RESSS1.6",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Segregation and division",
      type: "Child",
    },
    {
      id: "RESSS1.7",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Mental health and use of prescription drugs",
      type: "Child",
    },
    {
      id: "RESSS1.8",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Governance and financing of risk",
      type: "Child",
    },
    {
      id: "RESSS2.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Climate change",
      type: "Child",
    },
    {
      id: "ABVFB1",
      display: "Environment & Wellbeing",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Creating a healthy, shared, vibrant and sustainable environment that promotes wellbeing for all, inclusive growth and innovation",
      type: "Parent",
    },
    {
      id: "ABVFB2",
      display: "Sustainable Transport",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Fundamentally changing the centre of Belfast to prioritise integrated walking, cycling and public transport and end the dominance of the car",
      type: "Parent",
    },
    {
      id: "ABVFB4",
      display: "Improved Access",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Removing severance and barriers to movement between the centre of Belfast and the surrounding communities to improve access for all",
      type: "Parent",
    },
    {
      id: "BCLDP1",
      display: "Support Economic & Social Needs",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a 15 year plan framework to support economic and social needs in the city, in line with regional strategies and policies, while providing the delivery of sustainable development",
      type: "Parent",
    },
    {
      id: "BCLDP2",
      display: "Facilitate Growth",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Facilitate growth by coordinating public and private investment to encourage development where it can be of most benefit to the wellbeing of the community",
      type: "Parent",
    },
    {
      id: "BCLDP4",
      display: "Inclusive Development",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide an opportunity for all stakeholders, including the public, to have a say about where and how development within the local area should take place",
      type: "Parent",
    },
    {
      id: "BCLDP5",
      display: "Provide a Framework",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a plan-led framework for rational and consistent decision making by the public, private and community sectors and those affected by development proposals",
      type: "Parent",
    },
    {
      id: "BCLDP6",
      display: "Deliver spatial Aspects",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Deliver the spatial aspects of The Belfast Agenda, the city's Community Plan",
      type: "Parent",
    },
    {
      id: "BLDPI1.2",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Growing Belfast):Increase the city's population by 66,000 to over 400,000 by 2035",
      type: "Child",
    },
    {
      id: "BLDPI2.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure our main routes and arrival points are attractive",
      type: "Child",
    },
    {
      id: "BLDPI2.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure new development promotes greater connectivity",
      type: "Child",
    },
    {
      id: "BLDPI2.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Protect and enhance our older buildings",
      type: "Child",
    },
    {
      id: "BLDPI2.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Make the most of our unique features",
      type: "Child",
    },
    {
      id: "BLDPI2.14",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Promote high standards of energy efficiency in design",
      type: "Child",
    },
    {
      id: "BLDPI3.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Support and guide tourism development to enhance the city centre as the regional economic driver",
      type: "Child",
    },
    {
      id: "BLDPI3.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Promote shared space",
      type: "Child",
    },
    {
      id: "BLDPI3.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Regenerate key places within the city centre",
      type: "Child",
    },
    {
      id: "BLDPI4.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Infrastructure):Aim to ensure there is appropriate infrastructure to meet our needs whilst protecting our environment",
      type: "Child",
    },
    {
      id: "BLDPI4.2",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Transportation):Support walking and cycling alongside sustainable transport",
      type: "Child",
    },
    {
      id: "BLDPI4.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Transportation):Support improvements to public transport and facilities",
      type: "Child",
    },
    {
      id: "BLDPI4.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Improve environmental quality where possible, and protect communities from harm",
      type: "Child",
    },
    {
      id: "BLDPI4.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Facilitate the development of clean technologies and promote resilient design for a low carbon city",
      type: "Child",
    },
    {
      id: "BLDPI4.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Ensure design helps us adapt to environmental change, protect people, wildlife, built and natural environments",
      type: "Child",
    },
    {
      id: "BLDPI4.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Manage potential flood risk in built-up areas",
      type: "Child",
    },
    {
      id: "BLDPI5.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Better looking places",
      type: "Child",
    },
    {
      id: "BLDPI5.4",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):A richer mixture of wildlife and plants",
      type: "Child",
    },
    {
      id: "BLDPI5.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved connections to places",
      type: "Child",
    },
    {
      id: "BLDPI5.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Safer routes for walking and cycling",
      type: "Child",
    },
    {
      id: "BLDPI5.7",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Helping to prevent flooding",
      type: "Child",
    },
    {
      id: "BLDPI5.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved health and wellbeing",
      type: "Child",
    },
    {
      id: "BLDPI5.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Protect and improve open spaces, community greenways, natural green spaces, the Lagan Valley Regional Park, and the Belfast Hills",
      type: "Child",
    },
    {
      id: "BLDPI5.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Ensure developers help provide ‘green and blue’ networks close to residential developments",
      type: "Child",
    },
    {
      id: "BLDPI5.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Natural heritage):Protect existing trees and encourage new trees across Belfast",
      type: "Child",
    },
    {
      id: "BLDPO1",
      display: "Growing Belfast",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Growing Belfast",
      type: "Parent",
    },
    {
      id: "BLDPO2",
      display: "Shaping a Liveable Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Shaping a liveable place",
      type: "Parent",
    },
    {
      id: "BLDPO3",
      display: "Creating a Vibrant Economy",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Creating a vibrant economy",
      type: "Parent",
    },
    {
      id: "BLDPO4",
      display: "Smart Connected, Resilient Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A smart connected, resilient place",
      type: "Parent",
    },
    {
      id: "BLDPO5",
      display: "Green & Active Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A green and active place",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop a joined up framework across government to support the wellbeing of children and young people in educational settings and beyond. This will include the development and implementation of policies and guidance which promote emotional resilience in educational settings",
      type: "Child",
    },
    {
      id: "PLSPA1.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote mental health & wellbeing through arts, culture, leisure, libraries and sport",
      type: "Child",
    },
    {
      id: "PLSPA2.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop and deliver public education programmes: to increase awareness of the signs and symptoms of emotional distress and of the appropriate response; to reduce stigma around mental illness; and to encourage help-seeking behaviour",
      type: "Child",
    },
    {
      id: "PLSPA4.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support, encourage and procure communitybased suicide prevention services",
      type: "Child",
    },
    {
      id: "PLSPA4.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure effective co-ordination with Council community planning on suicide prevention by embedding suicide prevention in all District Council “Community Plans”",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA10.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Identify priorities for local research into suicide, self-harm & their prevention including data linkage; promote, encourage and commission local research",
      type: "Child",
    },
    {
      id: "ACIPR1.4",
      display: "4",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Enabling a sense of belonging and sense of place through cultural engagement to help encourage a strong civic identity that people can share and celebrate",
      type: "Child",
    },
    {
      id: "ACIPR2.1",
      display: "5",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Embedding cultural impact in citydevelopment and local place-making",
      type: "Child",
    },
    {
      id: "ACIPR2.2",
      display: "6",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in connected, resilient and sustainable infrastructure of quality cultural spaces across the city. This will also include digital spaces",
      type: "Child",
    },
    {
      id: "ACIPR2.3",
      display: "7",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Supporting high quality cultural events and activities that are accessible, diverse and inclusive",
      type: "Child",
    },
    {
      id: "ACIPR2.4",
      display: "8",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Transforming underused public spaces into vibrant and diverse cultural destinations",
      type: "Child",
    },
    {
      id: "ACIPR3.1",
      display: "9",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the autonomy of the creative sector to explore and shape the city’s evolving, rich and multiple cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR3.2",
      display: "10",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Supporting cultural excellence, cultural planning and cultural entrepreneurialism by providing support for artistic innovation and improved networking",
      type: "Child",
    },
    {
      id: "ACIPR3.3",
      display: "11",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in a stronger and more sustainable cultural sector by supporting established and new creative practitioners to work beyond boundaries. This will create the environment where risks can be taken across a broader range of activities, sectors and disciplines",
      type: "Child",
    },
    {
      id: "ACIPR3.4",
      display: "12",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Empowering the innovative capacity of the creative economy to connect technology and society",
      type: "Child",
    },
    {
      id: "ACIPR4.2",
      display: "14",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Growing our sustainable cultural tourism product through a creative approach that respects the city’s heritage and communities",
      type: "Child",
    },
    {
      id: "ACIPR4.3",
      display: "15",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Encouraging environmental responsibility and resilience by understanding and adapting cultural behaviours",
      type: "Child",
    },
    {
      id: "ACIPR4.4",
      display: "16",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the contribution of both public and private cultural sectors to inclusive economic growth",
      type: "Child",
    },
  ],
  links: [],
};
var westlinkSearchCare = {
  nodes: [
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },

    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },

    {
      id: "UNSDG9",
      display: "Industry, Innovation & Infrastructure",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Industry, Innovation and Infrastructure",
      type: "Parent",
    },
    {
      id: "UNSDG10",
      display: "Reduced Inequality",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Reduced Inequality",
      type: "Parent",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },

    {
      id: "UNSDG16",
      display: "Peace & Justice",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Peace and Justice Strong Institutions",
      type: "Parent",
    },
    {
      id: "UNSDG17",
      display: "Achieve",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Partnerships to achieve the Goal",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },

    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },

    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },

    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },

    {
      id: "UNSDT12.8",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
      type: "Child",
    },

    {
      id: "BGBIP1",
      display: "Biodiverse",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Biodiverse",
      type: "Parent",
    },
    {
      id: "BGBIB1",
      display: "Community Cohesion",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Supports community cohesion",
      type: "Parent",
    },
    {
      id: "BGBIB4",
      display: "Safe Movement",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improve connectivity for safe movement across the city",
      type: "Parent",
    },
    {
      id: "RESIL3",
      display: "C&Y People",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Children and young people",
      type: "Parent",
    },
    {
      id: "RESSS1.7",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Mental health and use of prescription drugs",
      type: "Child",
    },
    {
      id: "ABVFB1",
      display: "Environment & Wellbeing",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Creating a healthy, shared, vibrant and sustainable environment that promotes wellbeing for all, inclusive growth and innovation",
      type: "Parent",
    },
    {
      id: "BLDPI5.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved connections to places",
      type: "Child",
    },
    {
      id: "BLDPI5.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved health and wellbeing",
      type: "Child",
    },
    {
      id: "BLDPO2",
      display: "Shaping a Liveable Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Shaping a liveable place",
      type: "Parent",
    },
    {
      id: "BLDPO4",
      display: "Smart Connected, Resilient Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A smart connected, resilient place",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO3",
      display: "Responsible Media",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Enhance responsible media reporting on suicide",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO9",
      display: "Effective Support",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure the provision of effective support for those who are exposed to suicide or suicidal behaviour",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Work with the All Party Group on Suicide Prevention to build further societal commitment to reduce suicide and selfharm",
      type: "Child",
    },
    {
      id: "PLSPA1.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote UK-wide & North / South cooperation on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA2.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop and deliver public education programmes: to increase awareness of the signs and symptoms of emotional distress and of the appropriate response; to reduce stigma around mental illness; and to encourage help-seeking behaviour",
      type: "Child",
    },
    {
      id: "PLSPA2.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote awareness of available support, including de-escalation and bereavement services",
      type: "Child",
    },
    {
      id: "PLSPA2.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "3 Promote positive use of the internet & social media in relation to suicide prevention & selfharm reduction",
      type: "Child",
    },
    {
      id: "PLSPA3.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote use of, and compliance with, media guidelines on the reporting of suicide; review & update guidelines as necessary",
      type: "Child",
    },
    {
      id: "PLSPA3.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Monitor media reporting and challenge inappropriate reporting",
      type: "Child",
    },
    {
      id: "PLSPA3.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote best practice guidelines on memorials/ public gatherings/ social media postings",
      type: "Child",
    },
    {
      id: "PLSPA3.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure that Northern Ireland is part of the UK-wide arrangements to promote & encourage sensitive reporting of suicide online and in social media, and for making the internet safer for those who are vulnerable to suicide",
      type: "Child",
    },
    {
      id: "PLSPA4.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure effective co-ordination with Council community planning on suicide prevention by embedding suicide prevention in all District Council “Community Plans”",
      type: "Child",
    },
    {
      id: "PLSPA4.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Deliver a multi-sectoral training framework in suicide intervention for people working in the community",
      type: "Child",
    },
    {
      id: "PLSPA5.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Improve the process for learning from suicide & self-harm related adverse incidents",
      type: "Child",
    },
    {
      id: "PLSPA7.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide timely, accessible de-escalation services for those in emotional crisis or despair",
      type: "Child",
    },
    {
      id: "PLSPA8.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Improve access to, and uptake of, a range oftherapies and interventions for those who self-harm in line with NICE guidance on the management of self-harm and relevant guidance on other associated conditions",
      type: "Child",
    },
    {
      id: "PLSPA9.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide a consistent, compassionate approach to supporting those bereaved/affected by suicide, including family and social circle",
      type: "Child",
    },
    {
      id: "PLSPA9.6",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Identify emerging suicide clusters and act promptly to reduce the risk of further suicides in the community through proportionate activation of multi-agency Community Response Plans",
      type: "Child",
    },
    {
      id: "PLSPA9.7",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Implement recommendations of the PHA review of the Sudden Deaths Notification process and the Community Response Plan process",
      type: "Child",
    },
    {
      id: "PLSPA9.8",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure contracted organisations adhere to PHA Quality Standards of Services promoting mental and emotional wellbeing and suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA9.9",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support for school staff to help them provide effective support to children & young people affected by suicide or suicidal behaviours at home",
      type: "Child",
    },
  ],
  links: [],
};
var westlinkPreventionBarriers = {
  nodes: [
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI7",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve health in pregnancy",
      type: "Child",
    },

    {
      id: "PFGVI29",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase environmental sustainability",
      type: "Child",
    },
    {
      id: "PFGVI30",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our attractiveness as a destination",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },
    {
      id: "PFGVI37",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve air quality",
      type: "Child",
    },
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },

    {
      id: "UNSDG9",
      display: "Industry, Innovation & Infrastructure",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Industry, Innovation and Infrastructure",
      type: "Parent",
    },
    {
      id: "UNSDG10",
      display: "Reduced Inequality",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Reduced Inequality",
      type: "Parent",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },
    {
      id: "UNSDG12",
      display: "Consumption & Production",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Responsible Consumption and Production",
      type: "Parent",
    },
    {
      id: "UNSDG13",
      display: "Climate Action",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Climate Action",
      type: "Parent",
    },
    {
      id: "UNSDG16",
      display: "Peace & Justice",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Peace and Justice Strong Institutions",
      type: "Parent",
    },
    {
      id: "UNSDG17",
      display: "Achieve",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Partnerships to achieve the Goal",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },

    {
      id: "UNSDT3.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "UNSDT9.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },

    {
      id: "UNSDT11.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries",
      type: "Child",
    },
    {
      id: "UNSDT11.6",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },

    {
      id: "UNSDT12.8",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature",
      type: "Child",
    },
    {
      id: "UNSDT12.b",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT13.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
      type: "Child",
    },
    {
      id: "UNSDT13.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
      type: "Child",
    },
    {
      id: "UNSDT13.b",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities",
      type: "Child",
    },
    {
      id: "UNSDT15.a",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems",
      type: "Child",
    },
    {
      id: "UNSDT16.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Ensure responsive, inclusive, participatory and representative decision-making at all levels",
      type: "Child",
    },

    {
      id: "BGBIP1",
      display: "Biodiverse",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Biodiverse",
      type: "Parent",
    },
    {
      id: "BGBIP4",
      display: "Designed & Managed",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Well designed and managed",
      type: "Parent",
    },
    {
      id: "BGBIP5",
      display: "Appropiately Funded",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Appropriately funded",
      type: "Parent",
    },
    {
      id: "BGBIB1",
      display: "Community Cohesion",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Supports community cohesion",
      type: "Parent",
    },
    {
      id: "BGBIB2",
      display: "Drop in Theft",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Increases safety through 24% drop in burglaries and 69% drop in robberies",
      type: "Parent",
    },
    {
      id: "BGBIB3",
      display: "Setting, Character & Design Quality",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Contributes to place setting, character and design quality",
      type: "Parent",
    },
    {
      id: "BGBIB4",
      display: "Safe Movement",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improve connectivity for safe movement across the city",
      type: "Parent",
    },
    {
      id: "BGBIB5",
      display: "Health Benefits",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Provides demonstrable cardio, respiratory and mental health benefits (24% more likely to walk, run, cycle if live within 400m of green infrastructure)",
      type: "Parent",
    },
    {
      id: "BGBIB6",
      display: "Recreation",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Enables formal and informal recreation",
      type: "Parent",
    },
    {
      id: "BGBIB7",
      display: "Improve Air Quality",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improves air quality in terms of NOX, PM2.5 and PM10",
      type: "Parent",
    },
    {
      id: "BGBIB8",
      display: "Space for Biodiversity",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Provides space for biodiversity",
      type: "Parent",
    },
    {
      id: "BGBIB9",
      display: "Reduce Urban Temperature",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Reduced the heat island effect (increase of 10% green space can reduce urban temperature by up to 3 degrees celsius)",
      type: "Parent",
    },
    {
      id: "BGBIB10",
      display: "Drainage and Flood Management",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Supports sustainable approaches to drainage and flood risk management/ improves air quality",
      type: "Parent",
    },
    {
      id: "BGBIB11",
      display: "Creates Public Value",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "High rate of return on investment through job creation, tourism expenditure, social cost saving and wellbeing benefits (Every £1 of investment create £2 in public value)",
      type: "Parent",
    },
    {
      id: "BGBIB12",
      display: "Tourism",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Attracts visitors and tourists (£1.66-£2.78 expenditure per visit)",
      type: "Parent",
    },
    {
      id: "BGBIB13",
      display: "Elevated Property Prices",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Elevated property prices (5-7% increase)",
      type: "Parent",
    },
    {
      id: "RESIL1",
      display: "Climate Resilience",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate resilience",
      type: "Parent",
    },
    {
      id: "RESIL2",
      display: "Connectivity",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Connectivity",
      type: "Parent",
    },
    {
      id: "RESIL3",
      display: "C&Y People",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Children and young people",
      type: "Parent",
    },
    {
      id: "RESIL1.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Reducing your carbon footprint",
      type: "Child",
    },
    {
      id: "RESIL1.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description:
        "Better air quality - Risk to health and enjoyment of the city",
      type: "Child",
    },
    {
      id: "RESIL1.3",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "One million trees",
      type: "Child",
    },
    {
      id: "RESIL2.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Walking, cycling and public transport",
      type: "Child",
    },
    {
      id: "RESIL3.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Shaping your city",
      type: "Child",
    },
    {
      id: "RESIL3.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate Conversation",
      type: "Child",
    },
    {
      id: "RESSS1.1",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Economic recovery capacity: inequality and competitiveness",
      type: "Child",
    },
    {
      id: "RESSS1.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Dependency on fossil fuels and carbon intensive systems",
      type: "Child",
    },
    {
      id: "RESSS1.4",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Prevalence of car use",
      type: "Child",
    },
    {
      id: "RESSS1.6",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Segregation and division",
      type: "Child",
    },
    {
      id: "RESSS1.7",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Mental health and use of prescription drugs",
      type: "Child",
    },
    {
      id: "RESSS1.8",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Governance and financing of risk",
      type: "Child",
    },
    {
      id: "RESSS2.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Climate change",
      type: "Child",
    },
    {
      id: "RESSS2.4",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Flooding and extreme weather events",
      type: "Child",
    },
    {
      id: "ABVFB1",
      display: "Environment & Wellbeing",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Creating a healthy, shared, vibrant and sustainable environment that promotes wellbeing for all, inclusive growth and innovation",
      type: "Parent",
    },
    {
      id: "ABVFB2",
      display: "Sustainable Transport",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Fundamentally changing the centre of Belfast to prioritise integrated walking, cycling and public transport and end the dominance of the car",
      type: "Parent",
    },
    {
      id: "ABVFB4",
      display: "Improved Access",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Removing severance and barriers to movement between the centre of Belfast and the surrounding communities to improve access for all",
      type: "Parent",
    },
    {
      id: "BCLDP1",
      display: "Support Economic & Social Needs",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a 15 year plan framework to support economic and social needs in the city, in line with regional strategies and policies, while providing the delivery of sustainable development",
      type: "Parent",
    },
    {
      id: "BCLDP2",
      display: "Facilitate Growth",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Facilitate growth by coordinating public and private investment to encourage development where it can be of most benefit to the wellbeing of the community",
      type: "Parent",
    },
    {
      id: "BCLDP4",
      display: "Inclusive Development",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide an opportunity for all stakeholders, including the public, to have a say about where and how development within the local area should take place",
      type: "Parent",
    },
    {
      id: "BCLDP5",
      display: "Provide a Framework",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a plan-led framework for rational and consistent decision making by the public, private and community sectors and those affected by development proposals",
      type: "Parent",
    },
    {
      id: "BCLDP6",
      display: "Deliver spatial Aspects",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Deliver the spatial aspects of The Belfast Agenda, the city's Community Plan",
      type: "Parent",
    },
    {
      id: "BLDPI1.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Growing Belfast):Identify land to support the creation of up to 46,000 new jobs",
      type: "Child",
    },
    {
      id: "BLDPI1.2",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Growing Belfast):Increase the city's population by 66,000 to over 400,000 by 2035",
      type: "Child",
    },
    {
      id: "BLDPI2.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure our main routes and arrival points are attractive",
      type: "Child",
    },
    {
      id: "BLDPI2.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure new development promotes greater connectivity",
      type: "Child",
    },
    {
      id: "BLDPI2.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Make the most of our unique features",
      type: "Child",
    },
    {
      id: "BLDPI3.7",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - Economic Growth):Ensure a good mix of uses to meet local shopping needs and to provide local services",
      type: "Child",
    },
    {
      id: "BLDPI3.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Support and guide tourism development to enhance the city centre as the regional economic driver",
      type: "Child",
    },
    {
      id: "BLDPI3.11",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Support city centre living",
      type: "Child",
    },
    {
      id: "BLDPI3.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Promote shared space",
      type: "Child",
    },
    {
      id: "BLDPI3.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Regenerate key places within the city centre",
      type: "Child",
    },
    {
      id: "BLDPI4.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Infrastructure):Aim to ensure there is appropriate infrastructure to meet our needs whilst protecting our environment",
      type: "Child",
    },
    {
      id: "BLDPI4.2",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Transportation):Support walking and cycling alongside sustainable transport",
      type: "Child",
    },
    {
      id: "BLDPI4.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Transportation):Support improvements to public transport and facilities",
      type: "Child",
    },
    {
      id: "BLDPI4.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Improve environmental quality where possible, and protect communities from harm",
      type: "Child",
    },
    {
      id: "BLDPI4.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Facilitate the development of clean technologies and promote resilient design for a low carbon city",
      type: "Child",
    },
    {
      id: "BLDPI4.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Ensure design helps us adapt to environmental change, protect people, wildlife, built and natural environments",
      type: "Child",
    },
    {
      id: "BLDPI5.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Better looking places",
      type: "Child",
    },
    {
      id: "BLDPI5.4",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):A richer mixture of wildlife and plants",
      type: "Child",
    },
    {
      id: "BLDPI5.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved connections to places",
      type: "Child",
    },
    {
      id: "BLDPI5.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Safer routes for walking and cycling",
      type: "Child",
    },
    {
      id: "BLDPI5.7",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Helping to prevent flooding",
      type: "Child",
    },
    {
      id: "BLDPI5.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved health and wellbeing",
      type: "Child",
    },
    {
      id: "BLDPI5.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Protect and improve open spaces, community greenways, natural green spaces, the Lagan Valley Regional Park, and the Belfast Hills",
      type: "Child",
    },
    {
      id: "BLDPI5.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Ensure developers help provide ‘green and blue’ networks close to residential developments",
      type: "Child",
    },
    {
      id: "BLDPI5.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Natural heritage):Protect existing trees and encourage new trees across Belfast",
      type: "Child",
    },
    {
      id: "BLDPO1",
      display: "Growing Belfast",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Growing Belfast",
      type: "Parent",
    },
    {
      id: "BLDPO2",
      display: "Shaping a Liveable Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Shaping a liveable place",
      type: "Parent",
    },
    {
      id: "BLDPO3",
      display: "Creating a Vibrant Economy",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Creating a vibrant economy",
      type: "Parent",
    },
    {
      id: "BLDPO4",
      display: "Smart Connected, Resilient Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A smart connected, resilient place",
      type: "Parent",
    },
    {
      id: "BLDPO5",
      display: "Green & Active Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A green and active place",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Work with the All Party Group on Suicide Prevention to build further societal commitment to reduce suicide and selfharm",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA10.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Conduct ongoing surveillance to monitor changing behaviours or trends in suicide and self-harm means to inform preventative action, particularly where new methods emerge",
      type: "Child",
    },
    {
      id: "ACIPR1.3",
      display: "3",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Protecting, promoting and using cultural heritagein all its dimensions, both tangible and intangible, including the plurality of the city’s cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR1.4",
      display: "4",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Enabling a sense of belonging and sense of place through cultural engagement to help encourage a strong civic identity that people can share and celebrate",
      type: "Child",
    },
    {
      id: "ACIPR2.1",
      display: "5",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Embedding cultural impact in citydevelopment and local place-making",
      type: "Child",
    },
    {
      id: "ACIPR2.2",
      display: "6",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in connected, resilient and sustainable infrastructure of quality cultural spaces across the city. This will also include digital spaces",
      type: "Child",
    },
    {
      id: "ACIPR2.4",
      display: "8",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Transforming underused public spaces into vibrant and diverse cultural destinations",
      type: "Child",
    },
    {
      id: "ACIPR3.1",
      display: "9",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the autonomy of the creative sector to explore and shape the city’s evolving, rich and multiple cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR3.4",
      display: "12",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Empowering the innovative capacity of the creative economy to connect technology and society",
      type: "Child",
    },
    {
      id: "ACIPR4.3",
      display: "15",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Encouraging environmental responsibility and resilience by understanding and adapting cultural behaviours",
      type: "Child",
    },
    {
      id: "ACIPR4.4",
      display: "16",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the contribution of both public and private cultural sectors to inclusive economic growth",
      type: "Child",
    },
  ],
  links: [],
};
var westlinkBolderVision = {
  nodes: [
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI7",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve health in pregnancy",
      type: "Child",
    },

    {
      id: "PFGVI29",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase environmental sustainability",
      type: "Child",
    },
    {
      id: "PFGVI30",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our attractiveness as a destination",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },
    {
      id: "PFGVI37",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve air quality",
      type: "Child",
    },
    {
      id: "UNSDG1",
      display: "No Poverty",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "No Poverty",
      type: "Parent",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },
    {
      id: "UNSDG8",
      display: "Work & Economic Growth",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Decent Work and Economic Growth",
      type: "Parent",
    },
    {
      id: "UNSDG9",
      display: "Industry, Innovation & Infrastructure",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Industry, Innovation and Infrastructure",
      type: "Parent",
    },
    {
      id: "UNSDG10",
      display: "Reduced Inequality",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Reduced Inequality",
      type: "Parent",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },
    {
      id: "UNSDG12",
      display: "Consumption & Production",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Responsible Consumption and Production",
      type: "Parent",
    },
    {
      id: "UNSDG13",
      display: "Climate Action",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Climate Action",
      type: "Parent",
    },
    {
      id: "UNSDG16",
      display: "Peace & Justice",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Peace and Justice Strong Institutions",
      type: "Parent",
    },
    {
      id: "UNSDG17",
      display: "Achieve",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Partnerships to achieve the Goal",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },

    {
      id: "UNSDT3.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "UNSDT9.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },
    {
      id: "UNSDT11.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons",
      type: "Child",
    },
    {
      id: "UNSDT11.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries",
      type: "Child",
    },
    {
      id: "UNSDT11.6",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },

    {
      id: "UNSDT12.b",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT13.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
      type: "Child",
    },
    {
      id: "UNSDT13.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning",
      type: "Child",
    },
    {
      id: "UNSDT13.b",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities",
      type: "Child",
    },
    {
      id: "UNSDT15.a",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems",
      type: "Child",
    },
    {
      id: "UNSDT16.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Ensure responsive, inclusive, participatory and representative decision-making at all levels",
      type: "Child",
    },

    {
      id: "BGBIP1",
      display: "Biodiverse",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Biodiverse",
      type: "Parent",
    },
    {
      id: "BGBIP2",
      display: "Network",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Planned, interconnected network",
      type: "Parent",
    },
    {
      id: "BGBIP3",
      display: "Urban Environment",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Integrated into the urban environment",
      type: "Parent",
    },
    {
      id: "BGBIP4",
      display: "Designed & Managed",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Well designed and managed",
      type: "Parent",
    },
    {
      id: "BGBIP5",
      display: "Appropiately Funded",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Principles",
      description: "Appropriately funded",
      type: "Parent",
    },
    {
      id: "BGBIB1",
      display: "Community Cohesion",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Supports community cohesion",
      type: "Parent",
    },
    {
      id: "BGBIB2",
      display: "Drop in Theft",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Increases safety through 24% drop in burglaries and 69% drop in robberies",
      type: "Parent",
    },
    {
      id: "BGBIB3",
      display: "Setting, Character & Design Quality",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Contributes to place setting, character and design quality",
      type: "Parent",
    },
    {
      id: "BGBIB4",
      display: "Safe Movement",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improve connectivity for safe movement across the city",
      type: "Parent",
    },
    {
      id: "BGBIB5",
      display: "Health Benefits",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Provides demonstrable cardio, respiratory and mental health benefits (24% more likely to walk, run, cycle if live within 400m of green infrastructure)",
      type: "Parent",
    },
    {
      id: "BGBIB6",
      display: "Recreation",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Enables formal and informal recreation",
      type: "Parent",
    },
    {
      id: "BGBIB7",
      display: "Improve Air Quality",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Improves air quality in terms of NOX, PM2.5 and PM10",
      type: "Parent",
    },
    {
      id: "BGBIB8",
      display: "Space for Biodiversity",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Provides space for biodiversity",
      type: "Parent",
    },
    {
      id: "BGBIB9",
      display: "Reduce Urban Temperature",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Reduced the heat island effect (increase of 10% green space can reduce urban temperature by up to 3 degrees celsius)",
      type: "Parent",
    },
    {
      id: "BGBIB10",
      display: "Drainage and Flood Management",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Supports sustainable approaches to drainage and flood risk management/ improves air quality",
      type: "Parent",
    },
    {
      id: "BGBIB11",
      display: "Creates Public Value",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "High rate of return on investment through job creation, tourism expenditure, social cost saving and wellbeing benefits (Every £1 of investment create £2 in public value)",
      type: "Parent",
    },
    {
      id: "BGBIB12",
      display: "Tourism",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description:
        "Attracts visitors and tourists (£1.66-£2.78 expenditure per visit)",
      type: "Parent",
    },
    {
      id: "BGBIB13",
      display: "Elevated Property Prices",
      parentGroup: "Belfast Green and Blue Infrastructure Plan",
      group: "Belfast Green and Blue Infrastructure Plan Benefits",
      description: "Elevated property prices (5-7% increase)",
      type: "Parent",
    },
    {
      id: "RESIL1",
      display: "Climate Resilience",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate resilience",
      type: "Parent",
    },
    {
      id: "RESIL2",
      display: "Connectivity",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Connectivity",
      type: "Parent",
    },
    {
      id: "RESIL3",
      display: "C&Y People",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Children and young people",
      type: "Parent",
    },
    {
      id: "RESIL1.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Reducing your carbon footprint",
      type: "Child",
    },
    {
      id: "RESIL1.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description:
        "Better air quality - Risk to health and enjoyment of the city",
      type: "Child",
    },
    {
      id: "RESIL1.3",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "One million trees",
      type: "Child",
    },
    {
      id: "RESIL2.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Walking, cycling and public transport",
      type: "Child",
    },
    {
      id: "RESIL2.3",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Waste Water treatment capacity",
      type: "Child",
    },
    {
      id: "RESIL3.1",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Shaping your city",
      type: "Child",
    },
    {
      id: "RESIL3.2",
      display: "",
      parentGroup: "Resilience",
      group: "Resilience",
      description: "Climate Conversation",
      type: "Child",
    },
    {
      id: "RESSS1.1",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Economic recovery capacity: inequality and competitiveness",
      type: "Child",
    },
    {
      id: "RESSS1.2",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Population change",
      type: "Child",
    },
    {
      id: "RESSS1.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Dependency on fossil fuels and carbon intensive systems",
      type: "Child",
    },
    {
      id: "RESSS1.4",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Prevalence of car use",
      type: "Child",
    },
    {
      id: "RESSS1.6",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Segregation and division",
      type: "Child",
    },
    {
      id: "RESSS1.7",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Mental health and use of prescription drugs",
      type: "Child",
    },
    {
      id: "RESSS1.8",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Governance and financing of risk",
      type: "Child",
    },
    {
      id: "RESSS2.1",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Infrastructure capacity",
      type: "Child",
    },
    {
      id: "RESSS2.3",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Climate change",
      type: "Child",
    },
    {
      id: "RESSS2.4",
      display: "",
      parentGroup: "Resilience - Shocks and Stresses",
      group: "Resilience - Shocks and Stresses",
      description: "Flooding and extreme weather events",
      type: "Child",
    },
    {
      id: "ABVFB1",
      display: "Environment & Wellbeing",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Creating a healthy, shared, vibrant and sustainable environment that promotes wellbeing for all, inclusive growth and innovation",
      type: "Parent",
    },
    {
      id: "ABVFB2",
      display: "Sustainable Transport",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Fundamentally changing the centre of Belfast to prioritise integrated walking, cycling and public transport and end the dominance of the car",
      type: "Parent",
    },
    {
      id: "ABVFB4",
      display: "Improved Access",
      parentGroup: "A Bolder Vision for Belfast",
      group: "A Bolder Vision for Belfast Principles",
      description:
        "Removing severance and barriers to movement between the centre of Belfast and the surrounding communities to improve access for all",
      type: "Parent",
    },
    {
      id: "BCLDP1",
      display: "Support Economic & Social Needs",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a 15 year plan framework to support economic and social needs in the city, in line with regional strategies and policies, while providing the delivery of sustainable development",
      type: "Parent",
    },
    {
      id: "BCLDP2",
      display: "Facilitate Growth",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Facilitate growth by coordinating public and private investment to encourage development where it can be of most benefit to the wellbeing of the community",
      type: "Parent",
    },
    {
      id: "BCLDP3",
      display: "Allocate Sufficient Land",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description: "Allocate sufficient land to meet the needs of the city",
      type: "Parent",
    },
    {
      id: "BCLDP4",
      display: "Inclusive Development",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide an opportunity for all stakeholders, including the public, to have a say about where and how development within the local area should take place",
      type: "Parent",
    },
    {
      id: "BCLDP5",
      display: "Provide a Framework",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Provide a plan-led framework for rational and consistent decision making by the public, private and community sectors and those affected by development proposals",
      type: "Parent",
    },
    {
      id: "BCLDP6",
      display: "Deliver spatial Aspects",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Objectives",
      description:
        "Deliver the spatial aspects of The Belfast Agenda, the city's Community Plan",
      type: "Parent",
    },
    {
      id: "BLDPI1.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Growing Belfast):Identify land to support the creation of up to 46,000 new jobs",
      type: "Child",
    },
    {
      id: "BLDPI1.2",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Growing Belfast):Increase the city's population by 66,000 to over 400,000 by 2035",
      type: "Child",
    },
    {
      id: "BLDPI2.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure our main routes and arrival points are attractive",
      type: "Child",
    },
    {
      id: "BLDPI2.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Ensure new development promotes greater connectivity",
      type: "Child",
    },
    {
      id: "BLDPI2.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Protect and enhance our older buildings",
      type: "Child",
    },
    {
      id: "BLDPI2.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Make the most of our unique features",
      type: "Child",
    },
    {
      id: "BLDPI2.14",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Shaping a liveable place - Design & Heritage):Promote high standards of energy efficiency in design",
      type: "Child",
    },
    {
      id: "BLDPI3.7",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - Economic Growth):Ensure a good mix of uses to meet local shopping needs and to provide local services",
      type: "Child",
    },
    {
      id: "BLDPI3.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Review and define the city centre boundary to ensure enough space for future city centre developments",
      type: "Child",
    },
    {
      id: "BLDPI3.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Support and guide tourism development to enhance the city centre as the regional economic driver",
      type: "Child",
    },
    {
      id: "BLDPI3.11",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Support city centre living",
      type: "Child",
    },
    {
      id: "BLDPI3.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Promote shared space",
      type: "Child",
    },
    {
      id: "BLDPI3.13",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(Creating a vibrant economy - City Centre):Regenerate key places within the city centre",
      type: "Child",
    },
    {
      id: "BLDPI4.1",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Infrastructure):Aim to ensure there is appropriate infrastructure to meet our needs whilst protecting our environment",
      type: "Child",
    },
    {
      id: "BLDPI4.2",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Transportation):Support walking and cycling alongside sustainable transport",
      type: "Child",
    },
    {
      id: "BLDPI4.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Transportation):Support improvements to public transport and facilities",
      type: "Child",
    },
    {
      id: "BLDPI4.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Improve environmental quality where possible, and protect communities from harm",
      type: "Child",
    },
    {
      id: "BLDPI4.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Facilitate the development of clean technologies and promote resilient design for a low carbon city",
      type: "Child",
    },
    {
      id: "BLDPI4.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Ensure design helps us adapt to environmental change, protect people, wildlife, built and natural environments",
      type: "Child",
    },
    {
      id: "BLDPI4.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A smart connected, resilient place - Environmental quality and building resilience):Manage potential flood risk in built-up areas",
      type: "Child",
    },
    {
      id: "BLDPI5.3",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Better looking places",
      type: "Child",
    },
    {
      id: "BLDPI5.4",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):A richer mixture of wildlife and plants",
      type: "Child",
    },
    {
      id: "BLDPI5.5",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved connections to places",
      type: "Child",
    },
    {
      id: "BLDPI5.6",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Safer routes for walking and cycling",
      type: "Child",
    },
    {
      id: "BLDPI5.7",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Helping to prevent flooding",
      type: "Child",
    },
    {
      id: "BLDPI5.8",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Improved health and wellbeing",
      type: "Child",
    },
    {
      id: "BLDPI5.9",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Protect and improve open spaces, community greenways, natural green spaces, the Lagan Valley Regional Park, and the Belfast Hills",
      type: "Child",
    },
    {
      id: "BLDPI5.10",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Open space, sport and outdoor recreation):Ensure developers help provide ‘green and blue’ networks close to residential developments",
      type: "Child",
    },
    {
      id: "BLDPI5.12",
      display: "",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Indicators",
      description:
        "(A green and active place - Natural heritage):Protect existing trees and encourage new trees across Belfast",
      type: "Child",
    },
    {
      id: "BLDPO1",
      display: "Growing Belfast",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Growing Belfast",
      type: "Parent",
    },
    {
      id: "BLDPO2",
      display: "Shaping a Liveable Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Shaping a liveable place",
      type: "Parent",
    },
    {
      id: "BLDPO3",
      display: "Creating a Vibrant Economy",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "Creating a vibrant economy",
      type: "Parent",
    },
    {
      id: "BLDPO4",
      display: "Smart Connected, Resilient Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A smart connected, resilient place",
      type: "Parent",
    },
    {
      id: "BLDPO5",
      display: "Green & Active Place",
      parentGroup: "Belfast City Council Local Development Plan",
      group: "Belfast City Council Local Development Plan Outcomes",
      description: "A green and active place",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Work with the All Party Group on Suicide Prevention to build further societal commitment to reduce suicide and selfharm",
      type: "Child",
    },
    {
      id: "PLSPA1.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote mental health & wellbeing through arts, culture, leisure, libraries and sport",
      type: "Child",
    },
    {
      id: "PLSPA2.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop and deliver public education programmes: to increase awareness of the signs and symptoms of emotional distress and of the appropriate response; to reduce stigma around mental illness; and to encourage help-seeking behaviour",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA10.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Conduct ongoing surveillance to monitor changing behaviours or trends in suicide and self-harm means to inform preventative action, particularly where new methods emerge",
      type: "Child",
    },
    {
      id: "ACIPR1.3",
      display: "3",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Protecting, promoting and using cultural heritagein all its dimensions, both tangible and intangible, including the plurality of the city’s cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR1.4",
      display: "4",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Enabling a sense of belonging and sense of place through cultural engagement to help encourage a strong civic identity that people can share and celebrate",
      type: "Child",
    },
    {
      id: "ACIPR2.1",
      display: "5",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Embedding cultural impact in citydevelopment and local place-making",
      type: "Child",
    },
    {
      id: "ACIPR2.2",
      display: "6",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in connected, resilient and sustainable infrastructure of quality cultural spaces across the city. This will also include digital spaces",
      type: "Child",
    },
    {
      id: "ACIPR2.3",
      display: "7",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Supporting high quality cultural events and activities that are accessible, diverse and inclusive",
      type: "Child",
    },
    {
      id: "ACIPR2.4",
      display: "8",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Transforming underused public spaces into vibrant and diverse cultural destinations",
      type: "Child",
    },
    {
      id: "ACIPR3.1",
      display: "9",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the autonomy of the creative sector to explore and shape the city’s evolving, rich and multiple cultural narratives",
      type: "Child",
    },
    {
      id: "ACIPR3.3",
      display: "11",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Investing in a stronger and more sustainable cultural sector by supporting established and new creative practitioners to work beyond boundaries. This will create the environment where risks can be taken across a broader range of activities, sectors and disciplines",
      type: "Child",
    },
    {
      id: "ACIPR4.2",
      display: "14",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Growing our sustainable cultural tourism product through a creative approach that respects the city’s heritage and communities",
      type: "Child",
    },
    {
      id: "ACIPR4.3",
      display: "15",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Encouraging environmental responsibility and resilience by understanding and adapting cultural behaviours",
      type: "Child",
    },
    {
      id: "ACIPR4.4",
      display: "16",
      parentGroup: "A City Imagining - Priorities",
      group: "A City Imagining - Priorities",
      description:
        "Increasing the contribution of both public and private cultural sectors to inclusive economic growth",
      type: "Child",
    },
  ],
  links: [],
};

//FOYLE
var foyleAwarejson = {
  nodes: [
    {
      id: "PFGOV1",
      display: "Economy",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We prosper through a strong, competitive, regionally balanced economy",
      type: "Parent",
    },
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV10",
      display: "Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We are a confident, welcoming, outward-looking society",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI21",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the competitiveness of the economy",
      type: "Child",
    },
    {
      id: "PFGVI22",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase innovation in our economy",
      type: "Child",
    },
    {
      id: "PFGVI26",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase respect for each other",
      type: "Child",
    },
    {
      id: "PFGVI28",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the confidence and capability of people and communities",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },
    {
      id: "PFGVI35",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase reconciliation",
      type: "Child",
    },
    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "DSSGP1",
      display: "Better Skilled & Educated",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description: "(Economic wellbeing): We are better skilled and educated",
      type: "Parent",
    },
    {
      id: "DSSGP2",
      display: "Strong & Competitive Economy",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We prosper though a strong, sustainable and competitive economy",
      type: "Parent",
    },
    {
      id: "DSSGP3",
      display: "Cultural Destination",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We live in the cultural destination of choice",
      type: "Parent",
    },
    {
      id: "DSSGP4",
      display: "Live Sustainably",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We live sustainably - protecting and enhancing the environment",
      type: "Parent",
    },
    {
      id: "DSSGP5",
      display: "Connect through Infrastructure",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "DSSGP6",
      display: "Long fulfilling Lives",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live long, healthy and fulfilling lives",
      type: "Parent",
    },
    {
      id: "DSSGP7",
      display: "Community",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live in a shared, equal and safe community ",
      type: "Parent",
    },
    {
      id: "DSSGP8",
      display: "Best start in Life",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): Our children and young people have the best start in life",
      type: "Parent",
    },
    {
      id: "DSGPA3.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and promote the use of the District’s waterways and in particular the River Foyle as a tourism attraction",
      type: "Child",
    },
    {
      id: "DSGPA6.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "A strong focus on mental health and wellbeing across the lifetime of our people based on models of prevention, pathways to recovery and the Future Foyles research and green prescriptions",
      type: "Child",
    },
    {
      id: "DSGPA6.7",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop an age friendly City and Region through an integrated programme of action, based on a rights based approach and on the eight World Health Organisations’ key themes",
      type: "Child",
    },
    {
      id: "DSGPA7.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop co-design and co-production ways of working to deliver improved outcomes for our people",
      type: "Child",
    },
    {
      id: "PHMLB7",
      display: "Harm Reduction",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved health and reduction in harm",
      type: "Parent",
    },
    {
      id: "PHMLB8",
      display: "Mental Health & Wellbeing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved mental health and wellbeing, and reduction in self harm and suicide",
      type: "Parent",
    },
    {
      id: "PHMLB10",
      display: "Prevention",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Prevention embedded in services",
      type: "Parent",
    },
    {
      id: "PHMLB11",
      display: "Standard of Living",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): A decent standard of living",
      type: "Parent",
    },
    {
      id: "PHMLB17",
      display: "Strategic Approach",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): A Strategic Approach to Public Health",
      type: "Parent",
    },
    {
      id: "PHMLB18",
      display: "Collaboration",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): Strengthened collaboration for health and wellbeing",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PMLBI12.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Protect and promote good health and wellbeing",
      type: "Child",
    },
    {
      id: "PMLBI12.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Enhance the capacity of our physical infrastructure to protect, support and provide access to healthy and active living and wellbeing ",
      type: "Child",
    },
    {
      id: "PMLBI17.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Maximise the spend on prevention and early intervention",
      type: "Child",
    },
    {
      id: "PMLBI17.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote a planned and co-ordinated approach to research and development (R&D) activity to support improved public health",
      type: "Child",
    },
    {
      id: "PMLBI18.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Improve availability and use of data across all levels and sectors for the purposes of identifying priorities, planning action, monitoring trends and evaluating which actions are the most effective",
      type: "Child",
    },
    {
      id: "PMLBI18.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "In partnership with relevant departments, agencies, other sectors, local government and communities, develop and implement regional programmes to address health and wellbeing priorities in line with this framework",
      type: "Child",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote UK-wide & North / South cooperation on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA10.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Identify priorities for local research into suicide, self-harm & their prevention including data linkage; promote, encourage and commission local research",
      type: "Child",
    },
    {
      id: "PLSPA10.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Conduct ongoing surveillance to monitor changing behaviours or trends in suicide and self-harm means to inform preventative action, particularly where new methods emerge",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
  ],
  links: [],
};

var foyleReedjson = {
  nodes: [
    {
      id: "PFGOV1",
      display: "Economy",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We prosper through a strong, competitive, regionally balanced economy",
      type: "Parent",
    },

    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV10",
      display: "Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We are a confident, welcoming, outward-looking society",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI14",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the skills profile of the population",
      type: "Child",
    },
    {
      id: "PFGVI21",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the competitiveness of the economy",
      type: "Child",
    },
    {
      id: "PFGVI22",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase innovation in our economy",
      type: "Child",
    },
    {
      id: "PFGVI23",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Improve transport connections for people, goods and services",
      type: "Child",
    },

    {
      id: "PFGVI25",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the use of public transport and active travel",
      type: "Child",
    },
    {
      id: "PFGVI26",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase respect for each other",
      type: "Child",
    },
    {
      id: "PFGVI27",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve cultural participation",
      type: "Child",
    },
    {
      id: "PFGVI28",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the confidence and capability of people and communities",
      type: "Child",
    },
    {
      id: "PFGVI29",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase environmental sustainability",
      type: "Child",
    },
    {
      id: "PFGVI30",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our attractiveness as a destination",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },

    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "PHMLB1",
      display: "Quality Parenting & Family Support",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Good quality parenting and family support",
      type: "Parent",
    },
    {
      id: "PHMLB2",
      display: "Healthy & Confident Children",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Healthy and confident children and young people",
      type: "Parent",
    },
    {
      id: "PHMLB3",
      display: "Skilled for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Children and young people skilled for life",
      type: "Parent",
    },
    {
      id: "PHMLB4",
      display: "Ready for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Ready for adult life",
      type: "Parent",
    },
    {
      id: "PHMLB5",
      display: "Employment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 2: Equipped throughout Life): Employment, life-long learning and participation",
      type: "Parent",
    },
    {
      id: "PHMLB6",
      display: "Ageing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Healthy active ageing",
      type: "Parent",
    },
    {
      id: "PHMLB7",
      display: "Harm Reduction",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved health and reduction in harm",
      type: "Parent",
    },
    {
      id: "PHMLB8",
      display: "Mental Health & Wellbeing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved mental health and wellbeing, and reduction in self harm and suicide",
      type: "Parent",
    },
    {
      id: "PHMLB9",
      display: "Better Informed",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): People are better informed about health matters",
      type: "Parent",
    },
    {
      id: "PHMLB10",
      display: "Prevention",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Prevention embedded in services",
      type: "Parent",
    },
    {
      id: "PHMLB11",
      display: "Standard of Living",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): A decent standard of living",
      type: "Parent",
    },
    {
      id: "PHMLB12",
      display: "Physical Evironment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): Making the most of the physical environment",
      type: "Parent",
    },
    {
      id: "PHMLB13",
      display: "Safe & Healthy Homes",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 4: Creating the Conditions): Safe and healthy homes",
      type: "Parent",
    },
    {
      id: "PHMLB14",
      display: "Thriving Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Thriving communities",
      type: "Parent",
    },
    {
      id: "PHMLB15",
      display: "Safe Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Safe communities",
      type: "Parent",
    },
    {
      id: "PHMLB16",
      display: "Safe & Healthy Workplaces",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 5: Empowering communities): Safe and healthy workplaces",
      type: "Parent",
    },
    {
      id: "PHMLB17",
      display: "Strategic Approach",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): A Strategic Approach to Public Health",
      type: "Parent",
    },
    {
      id: "PHMLB18",
      display: "Collaboration",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): Strengthened collaboration for health and wellbeing",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO3",
      display: "Responsible Media",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Enhance responsible media reporting on suicide",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO9",
      display: "Effective Support",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure the provision of effective support for those who are exposed to suicide or suicidal behaviour",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },
    {
      id: "UNSDT4.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development",
      type: "Child",
    },
    {
      id: "UNSDT8.8",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "DSGPA2.11",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop vibrant social economy, creative and cultural sectors through targeted support programmes",
      type: "Child",
    },
    {
      id: "DSGPA3.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and promote the use of the District’s waterways and in particular the River Foyle as a tourism attraction",
      type: "Child",
    },
    {
      id: "DSGPA4.5",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Progress the development of regionally significant regeneration sites in Ebrington, Fort George, Derry City Centre and Strabane Town Centre in collaboration with government and private sector partners",
      type: "Child",
    },
    {
      id: "DSGPA4.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Deliver major local area-based regeneration projects and initiatives including the Top of the Hill masterplan and Drumahoe area development plan",
      type: "Child",
    },
    {
      id: "DSGPA4.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "To design and deliver high quality public realm schemes in our urban centres using innovative arts and cultural interventions",
      type: "Child",
    },
    {
      id: "DSGPA5.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Delivery of strategic road infrastructure whilst also enhancing greenway provision (or active travel opportunities)",
      type: "Child",
    },
    {
      id: "DSGPA6.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "A strong focus on mental health and wellbeing across the lifetime of our people based on models of prevention, pathways to recovery and the Future Foyles research and green prescriptions",
      type: "Child",
    },
    {
      id: "DSGPA6.13",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Work with our cultural partners to use engagement with arts and cultural heritage as a means of improving the health and wellbeing of our citizens",
      type: "Child",
    },
    {
      id: "DSGPA7.2",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Promote greater integration and inclusion within and between communities through animating shared spaces, services and facilities and the development of rural community clusters",
      type: "Child",
    },
    {
      id: "DSGPA7.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Foster positive community identities, creativity and build community capacity and resilience through a range of interventions",
      type: "Child",
    },
    {
      id: "DSGPA7.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Reduce crime, disorder and intercommunity tensions by addressing interface and contested spaces issues and improve safety",
      type: "Child",
    },
    {
      id: "DSGPA7.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop co-design and co-production ways of working to deliver improved outcomes for our people",
      type: "Child",
    },
    {
      id: "DSGPA8.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Provide positive opportunities for children and young people to take part in play, music, arts, drama, physical activity and sport",
      type: "Child",
    },
    {
      id: "PMLBI2.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities for every child and young person to develop confidence, personal resilience and basic skills required for life",
      type: "Child",
    },
    {
      id: "PMLBI2.6",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote the benefits of play and leisure and increase the opportunities for children and young people to enjoy it",
      type: "Child",
    },
    {
      id: "PMLBI12.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Protect and promote good health and wellbeing",
      type: "Child",
    },
    {
      id: "PMLBI12.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Enhance the capacity of our physical infrastructure to protect, support and provide access to healthy and active living and wellbeing ",
      type: "Child",
    },
    {
      id: "PMLBI14.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Strengthen and promote thriving communities which are welcoming, accessible and safe, and which support social inclusion",
      type: "Child",
    },
    {
      id: "PMLBI14.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Develop more cohesive and engaged communities by developing volunteering and active citizenship, and empower local people",
      type: "Child",
    },
    {
      id: "PMLBI14.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote healthy and thriving communities at local level, with a particular focus on disadvantaged areas",
      type: "Child",
    },
    {
      id: "PMLBI17.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Maximise the spend on prevention and early intervention",
      type: "Child",
    },
    {
      id: "PMLBI17.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote a planned and co-ordinated approach to research and development (R&D) activity to support improved public health",
      type: "Child",
    },
    {
      id: "PMLBI18.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities to strengthen local collaboration through the joint working arrangements between PHA and local government, and the outworking of local government reform and the new statutory duty of Community Planning process",
      type: "Child",
    },
    {
      id: "PMLBI18.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "In partnership with relevant departments, agencies, other sectors, local government and communities, develop and implement regional programmes to address health and wellbeing priorities in line with this framework",
      type: "Child",
    },
    {
      id: "PMLBI18.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities for local partnership action working with local communities to –  •establish a network of community led gardens and allotments which promote health and wellbeing •develop child friendly spaces through a neighbourhood approach to community safety •promote health and wellbeing of older people in their own homes through a home visitation scheme",
      type: "Child",
    },
    {
      id: "PLSPA1.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote UK-wide & North / South cooperation on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA1.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote mental health & wellbeing through arts, culture, leisure, libraries and sport",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA10.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Conduct ongoing surveillance to monitor changing behaviours or trends in suicide and self-harm means to inform preventative action, particularly where new methods emerge",
      type: "Child",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },

    {
      id: "UNSDT11.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },
  ],
  links: [],
};
var bigBubbleJSON = {
  nodes: [
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI5",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the quality of the healthcare experience",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI11",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve educational outcomes",
      type: "Child",
    },
    {
      id: "PFGVI12",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce educational inequality",
      type: "Child",
    },
    {
      id: "PFGVI13",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the quality of education",
      type: "Child",
    },
    {
      id: "PFGVI14",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the skills profile of the population",
      type: "Child",
    },
    {
      id: "PFGVI15",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve child development",
      type: "Child",
    },
    {
      id: "PFGVI16",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the proportion of people in work",
      type: "Child",
    },
    {
      id: "PFGVI17",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce economic inactivity",
      type: "Child",
    },
    {
      id: "PFGVI18",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the proportion of people working in good jobs",
      type: "Child",
    },
    {
      id: "PFGVI20",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the size of the economy",
      type: "Child",
    },
    {
      id: "PFGVI35",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase reconciliation",
      type: "Child",
    },
    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "PFGVI41",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the proportion of graduates moving into employment or on to further study",
      type: "Child",
    },
    {
      id: "DSSGP1",
      display: "Better Skilled & Educated",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description: "(Economic wellbeing): We are better skilled and educated",
      type: "Parent",
    },
    {
      id: "DSSGP2",
      display: "Strong & Competitive Economy",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We prosper though a strong, sustainable and competitive economy",
      type: "Parent",
    },
    {
      id: "DSSGP3",
      display: "Cultural Destination",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We live in the cultural destination of choice",
      type: "Parent",
    },
    {
      id: "DSSGP4",
      display: "Live Sustainably",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We live sustainably - protecting and enhancing the environment",
      type: "Parent",
    },
    {
      id: "DSSGP5",
      display: "Connect through Infrastructure",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "DSSGP6",
      display: "Long fulfilling Lives",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live long, healthy and fulfilling lives",
      type: "Parent",
    },
    {
      id: "DSSGP7",
      display: "Community",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live in a shared, equal and safe community ",
      type: "Parent",
    },
    {
      id: "DSSGP8",
      display: "Best start in Life",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): Our children and young people have the best start in life",
      type: "Parent",
    },
    {
      id: "PHMLB2",
      display: "Healthy & Confident Children",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Healthy and confident children and young people",
      type: "Parent",
    },
    {
      id: "PHMLB3",
      display: "Skilled for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Children and young people skilled for life",
      type: "Parent",
    },
    {
      id: "PHMLB4",
      display: "Ready for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Ready for adult life",
      type: "Parent",
    },
    {
      id: "PHMLB5",
      display: "Employment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 2: Equipped throughout Life): Employment, life-long learning and participation",
      type: "Parent",
    },
    {
      id: "PHMLB6",
      display: "Ageing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Healthy active ageing",
      type: "Parent",
    },
    {
      id: "PHMLB7",
      display: "Harm Reduction",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved health and reduction in harm",
      type: "Parent",
    },
    {
      id: "PHMLB8",
      display: "Mental Health & Wellbeing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved mental health and wellbeing, and reduction in self harm and suicide",
      type: "Parent",
    },
    {
      id: "PHMLB9",
      display: "Better Informed",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): People are better informed about health matters",
      type: "Parent",
    },
    {
      id: "PHMLB10",
      display: "Prevention",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Prevention embedded in services",
      type: "Parent",
    },
    {
      id: "PHMLB11",
      display: "Standard of Living",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): A decent standard of living",
      type: "Parent",
    },
    {
      id: "PHMLB12",
      display: "Physical Evironment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): Making the most of the physical environment",
      type: "Parent",
    },
    {
      id: "PHMLB14",
      display: "Thriving Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Thriving communities",
      type: "Parent",
    },
    {
      id: "PHMLB15",
      display: "Safe Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Safe communities",
      type: "Parent",
    },
    {
      id: "PHMLB16",
      display: "Safe & Healthy Workplaces",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 5: Empowering communities): Safe and healthy workplaces",
      type: "Parent",
    },
    {
      id: "PHMLB17",
      display: "Strategic Approach",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): A Strategic Approach to Public Health",
      type: "Parent",
    },
    {
      id: "PHMLB18",
      display: "Collaboration",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): Strengthened collaboration for health and wellbeing",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO9",
      display: "Effective Support",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure the provision of effective support for those who are exposed to suicide or suicidal behaviour",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "UNSDT1.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },
    {
      id: "UNSDT3.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol",
      type: "Child",
    },
    {
      id: "UNSDT4.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship",
      type: "Child",
    },
    {
      id: "UNSDT4.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development",
      type: "Child",
    },
    {
      id: "UNSDT8.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors",
      type: "Child",
    },
    {
      id: "UNSDT8.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services",
      type: "Child",
    },
    {
      id: "UNSDT8.6",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        " By 2020, substantially reduce the proportion of youth not in employment, education or training",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "DSGPA1.2",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and support models of shared education across the Council area – both capital and programme initiatives though a partnership model with a range of sectors.",
      type: "Child",
    },
    {
      id: "DSGPA1.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Work towards securing UNESCO Learning City and Region status, promote and accelerate the practice of life-long learning, develop an active, creative and inclusive learning culture from early education in families, the workplace and communities.",
      type: "Child",
    },
    {
      id: "DSGPA1.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Embed entrepreneurialism and creativity within all learning opportunities in collaboration with appropriate agencies",
      type: "Child",
    },
    {
      id: "DSGPA1.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Promote the importance of educational pathways and promote the apprenticeship framework",
      type: "Child",
    },
    {
      id: "DSGPA2.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Build and Strengthen clusters of Industry specialism in Advanced Manufacturing, Life and Health Sciences, Digital, Creative and Cultural Industries and Tourism",
      type: "Child",
    },
    {
      id: "DSGPA2.8",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop incubation space and opportunities for collaborative public sector shared office space",
      type: "Child",
    },
    {
      id: "DSGPA2.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Provide intensive mentoring support for Entrepreneurs from underrepresented groups",
      type: "Child",
    },
    {
      id: "DSGPA2.10",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Deliver business start-up programmes and development support focused on areas of high economic inactivity and rural community hubs",
      type: "Child",
    },
    {
      id: "DSGPA2.11",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop vibrant social economy, creative and cultural sectors through targeted support programmes",
      type: "Child",
    },
    {
      id: "DSGPA3.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "In conjunction with the Tourism and Arts & Culture strategies develop an ambitious festival and events strategy, sustain and grow the existing festival and events programme, develop capacity, capability and secure events of international appeal and develop signature events around key themes and designations",
      type: "Child",
    },
    {
      id: "DSGPA3.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and promote the use of the District’s waterways and in particular the River Foyle as a tourism attraction",
      type: "Child",
    },
    {
      id: "DSGPA3.10",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Support the arts and cultural ecosystem to become sustainable through new revenue opportunities including additional investment and commercial activity",
      type: "Child",
    },
    {
      id: "DSGPA3.11",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and deliver an Access and Inclusion Programme in partnership with the Public Health Agency encouraging participation and engagement, promoting intercultural diversity, wellbeing and promoting accessible cultural experiences",
      type: "Child",
    },
    {
      id: "DSGPA4.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Deliver major local area-based regeneration projects and initiatives including the Top of the Hill masterplan and Drumahoe area development plan",
      type: "Child",
    },
    {
      id: "DSGPA4.7",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Support the implementation of the Urban Villages Programme in the Bogside, Fountain and Bishop Street areas to foster positive community identities, build community capacity and improve the physical environment of the area.",
      type: "Child",
    },
    {
      id: "DSGPA4.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "To design and deliver high quality public realm schemes in our urban centres using innovative arts and cultural interventions",
      type: "Child",
    },
    {
      id: "DSGPA4.10",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Enhancement of the natural environment through biodiversity action planning and landscape scale conservation projects to protect and enhance natural environmental assets",
      type: "Child",
    },
    {
      id: "DSGPA6.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "A strong focus on mental health and wellbeing across the lifetime of our people based on models of prevention, pathways to recovery and the Future Foyles research and green prescriptions",
      type: "Child",
    },
    {
      id: "DSGPA6.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop community based support for the delivery of crisis intervention services",
      type: "Child",
    },
    {
      id: "DSGPA6.7",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop an age friendly City and Region through an integrated programme of action, based on a rights based approach and on the eight World Health Organisations’ key themes",
      type: "Child",
    },
    {
      id: "DSGPA6.8",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Support cross-border collaboration in health and social care with a focus on early intervention with vulnerable families; promotion of positive mental health and well-being; supporting independence and inclusion of older people; and citizenship for people with disabilities",
      type: "Child",
    },
    {
      id: "DSGPA6.13",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Work with our cultural partners to use engagement with arts and cultural heritage as a means of improving the health and wellbeing of our citizens",
      type: "Child",
    },
    {
      id: "DSGPA7.2",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Promote greater integration and inclusion within and between communities through animating shared spaces, services and facilities and the development of rural community clusters",
      type: "Child",
    },
    {
      id: "DSGPA7.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Foster positive community identities, creativity and build community capacity and resilience through a range of interventions",
      type: "Child",
    },
    {
      id: "DSGPA7.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Reduce crime, disorder and intercommunity tensions by addressing interface and contested spaces issues and improve safety",
      type: "Child",
    },
    {
      id: "DSGPA7.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop co-design and co-production ways of working to deliver improved outcomes for our people",
      type: "Child",
    },
    {
      id: "DSGPA8.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Provide positive opportunities for children and young people to take part in play, music, arts, drama, physical activity and sport",
      type: "Child",
    },
    {
      id: "DSGPA8.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Establish local structures to allow children and young people to be involved in decisions which affect them and have their voices heard, including establishment of a Youth Council",
      type: "Child",
    },
    {
      id: "PMLBI4.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote employability schemes in public and private sectors targeted at young and long term unemployed",
      type: "Child",
    },
    {
      id: "PMLBI6.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote healthy active ageing, through opportunities to participate including for example through volunteering and opportunities for learning",
      type: "Child",
    },
    {
      id: "PMLBI6.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Delivery of the cross-cutting Active Ageing Strategy which will promote age friendly environments using the WHO Age Friendly Environments programme",
      type: "Child",
    },
    {
      id: "PMLBI6.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Take forward public engagement to promote good nutrition",
      type: "Child",
    },
    {
      id: "PMLBI8.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Increase resilience and improve mental wellbeing in children and young people through implementation of initiatives outlined in theme 1 including eg Family Support, Roots of Empathy, iMatter (pupil’s emotional health and wellbeing programme) – particular focus on children and young people from families at risk",
      type: "Child",
    },
    {
      id: "PMLBI8.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Reduce the levels of self harm through roll out of successfully evaluated approaches, focussing in particular on people who repeatedly self harm, people treated at A&E for injuries due to deliberate self harm",
      type: "Child",
    },
    {
      id: "PMLBI10.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Increase the emphasis on prevention and early intervention in the commissioning and delivery of Primary, Community, and Secondary Care services",
      type: "Child",
    },
    {
      id: "PMLBI11.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Reduce economic inactivity through development and implementation of a strategy for skills, training, incentives and job creation, and careers advice",
      type: "Child",
    },
    {
      id: "PMLBI11.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Provide more opportunities for work experience and employment through, for example, maximising the use of social clauses in procurement contracts, and the potential contribution of employability schemes through public and private sector organisations – this focuses on the unemployed, particularly the young and long term",
      type: "Child",
    },

    {
      id: "PMLBI12.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Protect and promote good health and wellbeing",
      type: "Child",
    },
    {
      id: "PMLBI12.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Enhance the capacity of our physical infrastructure to protect, support and provide access to healthy and active living and wellbeing ",
      type: "Child",
    },
    {
      id: "PMLBI14.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Strengthen and promote thriving communities which are welcoming, accessible and safe, and which support social inclusion",
      type: "Child",
    },
    {
      id: "PMLBI14.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Develop more cohesive and engaged communities by developing volunteering and active citizenship, and empower local people",
      type: "Child",
    },
    {
      id: "PMLBI14.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Through the Social Investment Fund, support communities to Build Pathways to Employment by tackling educational under achievement and barriers to employment; tackling skills deficits and promoting job brokerage, widening access to the labour market, promoting business start up and increasing sustainability through social enterprise – focus on targeted areas and population groups",
      type: "Child",
    },
    {
      id: "PMLBI14.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote healthy and thriving communities at local level, with a particular focus on disadvantaged areas",
      type: "Child",
    },
    {
      id: "PMLBI14.9",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Ensure that everyone has an opportunity to volunteer and that volunteering is representative of the diversity of the community",
      type: "Child",
    },
    {
      id: "PMLBI16.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Support more businesses to provide workplace health and wellbeing programmes to secure –  •improved physical and mental wellbeing  •reduction in the number of reportable work related injuries •prevention, control and management of key occupational health hazards •awareness raising and advisory campaigns to highlight the dangers of carbon monoxide and promote appropriate management of risk •appropriate control of risks to the public from harmful organisms encountered in, or associated with workplaces such as legionella sp, E.coli sp",
      type: "Child",
    },
    {
      id: "PMLBI17.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Establish governance, implementation, engagement and monitoring arrangements at strategic, regional and local levels which interconnect to create a whole system approach ",
      type: "Child",
    },
    {
      id: "PMLBI17.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Maximise the spend on prevention and early intervention",
      type: "Child",
    },
    {
      id: "PMLBI17.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote a planned and co-ordinated approach to research and development (R&D) activity to support improved public health",
      type: "Child",
    },
    {
      id: "PMLBI18.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities to strengthen local collaboration through the joint working arrangements between PHA and local government, and the outworking of local government reform and the new statutory duty of Community Planning process",
      type: "Child",
    },
    {
      id: "PMLBI18.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Improve availability and use of data across all levels and sectors for the purposes of identifying priorities, planning action, monitoring trends and evaluating which actions are the most effective",
      type: "Child",
    },
    {
      id: "PMLBI18.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "In partnership with relevant departments, agencies, other sectors, local government and communities, develop and implement regional programmes to address health and wellbeing priorities in line with this framework",
      type: "Child",
    },
    {
      id: "PMLBI18.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities for local partnership action working with local communities to –  •establish a network of community led gardens and allotments which promote health and wellbeing •develop child friendly spaces through a neighbourhood approach to community safety •promote health and wellbeing of older people in their own homes through a home visitation scheme",
      type: "Child",
    },
    {
      id: "PLSPA2.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop and deliver public education programmes: to increase awareness of the signs and symptoms of emotional distress and of the appropriate response; to reduce stigma around mental illness; and to encourage help-seeking behaviour",
      type: "Child",
    },
    {
      id: "PLSPA4.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support, encourage and procure communitybased suicide prevention services",
      type: "Child",
    },
    {
      id: "PLSPA4.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide practical support to employers on mentally healthy workplaces and supporting employees experiencing emotional crisis",
      type: "Child",
    },
    {
      id: "PLSPA4.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Encourage universities, colleges, schools and training organisations to promote a culture of help-seeking behaviour and suicide prevention awareness among their students and trainees",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA7.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide timely, accessible de-escalation services for those in emotional crisis or despair",
      type: "Child",
    },
    {
      id: "PLSPA9.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide a consistent, compassionate approach to supporting those bereaved/affected by suicide, including family and social circle",
      type: "Child",
    },
    {
      id: "PLSPA9.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Facilitate support networks for people bereaved by suicide and their role in influencing policy and service delivery",
      type: "Child",
    },
    {
      id: "PLSPA9.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide support and reflective practice for professionals who experience loss of patient or client to suicide and their work on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA9.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support families and other informal carers in caring for suicidal individuals to help them manage suicidal behaviours and emotional distress; and to look after their own mental wellbeing",
      type: "Child",
    },
    {
      id: "PLSPA9.7",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Implement recommendations of the PHA review of the Sudden Deaths Notification process and the Community Response Plan process",
      type: "Child",
    },
    {
      id: "PLSPA9.8",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure contracted organisations adhere to PHA Quality Standards of Services promoting mental and emotional wellbeing and suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA9.9",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support for school staff to help them provide effective support to children & young people affected by suicide or suicidal behaviours at home",
      type: "Child",
    },
    {
      id: "UNSDT11.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries",
      type: "Child",
    },
    {
      id: "UNSDT11.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen efforts to protect and safeguard the world’s cultural and natural heritage",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },
    {
      id: "UNSDT11.a",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning",
      type: "Child",
    },
    {
      id: "PFGOV1",
      display: "Economy",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We prosper through a strong, competitive, regionally balanced economy",
      type: "Parent",
    },
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV10",
      display: "Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We are a confident, welcoming, outward-looking society",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
  ],
  links: [],
};
var foyleBubblesJson = {
  nodes: [
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI5",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the quality of the healthcare experience",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI11",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve educational outcomes",
      type: "Child",
    },
    {
      id: "PFGVI12",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce educational inequality",
      type: "Child",
    },
    {
      id: "PFGVI13",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the quality of education",
      type: "Child",
    },
    {
      id: "PFGVI14",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the skills profile of the population",
      type: "Child",
    },
    {
      id: "PFGVI15",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve child development",
      type: "Child",
    },
    {
      id: "PFGVI16",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the proportion of people in work",
      type: "Child",
    },
    {
      id: "PFGVI17",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce economic inactivity",
      type: "Child",
    },
    {
      id: "PFGVI18",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the proportion of people working in good jobs",
      type: "Child",
    },
    {
      id: "PFGVI20",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the size of the economy",
      type: "Child",
    },
    {
      id: "PFGVI35",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase reconciliation",
      type: "Child",
    },
    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "PFGVI41",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the proportion of graduates moving into employment or on to further study",
      type: "Child",
    },
  ],
  links: [],
};

var foyleExperienceJson = {
  nodes: [
    {
      id: "PFGOV1",
      display: "Economy",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We prosper through a strong, competitive, regionally balanced economy",
      type: "Parent",
    },
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV10",
      display: "Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We are a confident, welcoming, outward-looking society",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },

    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI14",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the skills profile of the population",
      type: "Child",
    },

    {
      id: "PFGVI22",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase innovation in our economy",
      type: "Child",
    },
    {
      id: "PFGVI23",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Improve transport connections for people, goods and services",
      type: "Child",
    },
    {
      id: "PFGVI25",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the use of public transport and active travel",
      type: "Child",
    },
    {
      id: "PFGVI26",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase respect for each other",
      type: "Child",
    },
    {
      id: "PFGVI27",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve cultural participation",
      type: "Child",
    },
    {
      id: "PFGVI28",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the confidence and capability of people and communities",
      type: "Child",
    },

    {
      id: "PFGVI30",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our attractiveness as a destination",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },
    {
      id: "PFGVI35",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase reconciliation",
      type: "Child",
    },
    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "DSSGP1",
      display: "Better Skilled & Educated",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description: "(Economic wellbeing): We are better skilled and educated",
      type: "Parent",
    },
    {
      id: "DSSGP2",
      display: "Strong & Competitive Economy",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We prosper though a strong, sustainable and competitive economy",
      type: "Parent",
    },
    {
      id: "DSSGP3",
      display: "Cultural Destination",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We live in the cultural destination of choice",
      type: "Parent",
    },
    {
      id: "DSSGP4",
      display: "Live Sustainably",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We live sustainably - protecting and enhancing the environment",
      type: "Parent",
    },
    {
      id: "DSSGP5",
      display: "Connect through Infrastructure",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "DSSGP6",
      display: "Long fulfilling Lives",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live long, healthy and fulfilling lives",
      type: "Parent",
    },
    {
      id: "DSSGP7",
      display: "Community",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live in a shared, equal and safe community ",
      type: "Parent",
    },
    {
      id: "DSSGP8",
      display: "Best start in Life",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): Our children and young people have the best start in life",
      type: "Parent",
    },
    {
      id: "PHMLB12",
      display: "Physical Evironment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): Making the most of the physical environment",
      type: "Parent",
    },
    {
      id: "PHMLB14",
      display: "Thriving Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Thriving communities",
      type: "Parent",
    },
    {
      id: "PHMLB15",
      display: "Safe Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Safe communities",
      type: "Parent",
    },
    {
      id: "PHMLB16",
      display: "Safe & Healthy Workplaces",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 5: Empowering communities): Safe and healthy workplaces",
      type: "Parent",
    },
    {
      id: "PHMLB17",
      display: "Strategic Approach",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): A Strategic Approach to Public Health",
      type: "Parent",
    },
    {
      id: "PHMLB18",
      display: "Collaboration",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): Strengthened collaboration for health and wellbeing",
      type: "Parent",
    },
    {
      id: "PHMLB5",
      display: "Employment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 2: Equipped throughout Life): Employment, life-long learning and participation",
      type: "Parent",
    },
    {
      id: "PHMLB6",
      display: "Ageing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Healthy active ageing",
      type: "Parent",
    },
    {
      id: "PHMLB7",
      display: "Harm Reduction",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved health and reduction in harm",
      type: "Parent",
    },
    {
      id: "PHMLB8",
      display: "Mental Health & Wellbeing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved mental health and wellbeing, and reduction in self harm and suicide",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },
    {
      id: "UNSDT4.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "DSGPA2.11",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop vibrant social economy, creative and cultural sectors through targeted support programmes",
      type: "Child",
    },
    {
      id: "DSGPA3.5",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and promote our heritage assets - in particular managing the Walled City to realise its full potential to the standard of a world heritage site - through capital investment, preservation and a marketing programme. Expand and develop the Walled City Signature Project including Phase 2 of the Lighting Strategy to encompass new attractions",
      type: "Child",
    },
    {
      id: "DSGPA3.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and promote the use of the District’s waterways and in particular the River Foyle as a tourism attraction",
      type: "Child",
    },
    {
      id: "DSGPA4.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Protect and promote our natural and built heritage assets through the establishment of multi-sectoral heritage partnerships, heritage education programmes, skills specialisms development and integration with our tourism product offering.",
      type: "Child",
    },
    {
      id: "DSGPA4.5",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Progress the development of regionally significant regeneration sites in Ebrington, Fort George, Derry City Centre and Strabane Town Centre in collaboration with government and private sector partners",
      type: "Child",
    },
    {
      id: "DSGPA4.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Deliver major local area-based regeneration projects and initiatives including the Top of the Hill masterplan and Drumahoe area development plan",
      type: "Child",
    },
    {
      id: "DSGPA4.7",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Support the implementation of the Urban Villages Programme in the Bogside, Fountain and Bishop Street areas to foster positive community identities, build community capacity and improve the physical environment of the area.",
      type: "Child",
    },
    {
      id: "DSGPA5.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Delivery of strategic road infrastructure whilst also enhancing greenway provision (or active travel opportunities)",
      type: "Child",
    },
    {
      id: "DSGPA6.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "A strong focus on mental health and wellbeing across the lifetime of our people based on models of prevention, pathways to recovery and the Future Foyles research and green prescriptions",
      type: "Child",
    },
    {
      id: "DSGPA6.13",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Work with our cultural partners to use engagement with arts and cultural heritage as a means of improving the health and wellbeing of our citizens",
      type: "Child",
    },
    {
      id: "DSGPA7.2",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Promote greater integration and inclusion within and between communities through animating shared spaces, services and facilities and the development of rural community clusters",
      type: "Child",
    },
    {
      id: "DSGPA7.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Foster positive community identities, creativity and build community capacity and resilience through a range of interventions",
      type: "Child",
    },
    {
      id: "DSGPA7.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Reduce crime, disorder and intercommunity tensions by addressing interface and contested spaces issues and improve safety",
      type: "Child",
    },
    {
      id: "DSGPA7.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop co-design and co-production ways of working to deliver improved outcomes for our people",
      type: "Child",
    },
    {
      id: "DSGPA8.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Provide positive opportunities for children and young people to take part in play, music, arts, drama, physical activity and sport",
      type: "Child",
    },
    {
      id: "PMLBI2.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities for every child and young person to develop confidence, personal resilience and basic skills required for life",
      type: "Child",
    },
    {
      id: "PMLBI2.6",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote the benefits of play and leisure and increase the opportunities for children and young people to enjoy it",
      type: "Child",
    },
    {
      id: "PMLBI12.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Protect and promote good health and wellbeing",
      type: "Child",
    },
    {
      id: "PMLBI12.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Enhance the capacity of our physical infrastructure to protect, support and provide access to healthy and active living and wellbeing ",
      type: "Child",
    },
    {
      id: "PMLBI14.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Strengthen and promote thriving communities which are welcoming, accessible and safe, and which support social inclusion",
      type: "Child",
    },
    {
      id: "PMLBI14.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Develop more cohesive and engaged communities by developing volunteering and active citizenship, and empower local people",
      type: "Child",
    },
    {
      id: "PMLBI14.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote healthy and thriving communities at local level, with a particular focus on disadvantaged areas",
      type: "Child",
    },
    {
      id: "PMLBI17.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Maximise the spend on prevention and early intervention",
      type: "Child",
    },
    {
      id: "PMLBI17.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote a planned and co-ordinated approach to research and development (R&D) activity to support improved public health",
      type: "Child",
    },
    {
      id: "PMLBI18.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities to strengthen local collaboration through the joint working arrangements between PHA and local government, and the outworking of local government reform and the new statutory duty of Community Planning process",
      type: "Child",
    },
    {
      id: "PMLBI18.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "In partnership with relevant departments, agencies, other sectors, local government and communities, develop and implement regional programmes to address health and wellbeing priorities in line with this framework",
      type: "Child",
    },
    {
      id: "PMLBI18.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities for local partnership action working with local communities to –  •establish a network of community led gardens and allotments which promote health and wellbeing •develop child friendly spaces through a neighbourhood approach to community safety •promote health and wellbeing of older people in their own homes through a home visitation scheme",
      type: "Child",
    },
    {
      id: "PLSPA1.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote UK-wide & North / South cooperation on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA1.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote mental health & wellbeing through arts, culture, leisure, libraries and sport",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA10.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Conduct ongoing surveillance to monitor changing behaviours or trends in suicide and self-harm means to inform preventative action, particularly where new methods emerge",
      type: "Child",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },
    {
      id: "UNSDT11.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons",
      type: "Child",
    },
    {
      id: "UNSDT11.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen efforts to protect and safeguard the world’s cultural and natural heritage",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },
  ],
  links: [],
};

var foyleSearchCare = {
  nodes: [
    {
      id: "PFGOV1",
      display: "Economy",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We prosper through a strong, competitive, regionally balanced economy",
      type: "Parent",
    },
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV10",
      display: "Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We are a confident, welcoming, outward-looking society",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },

    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI11",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve educational outcomes",
      type: "Child",
    },

    {
      id: "PFGVI26",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase respect for each other",
      type: "Child",
    },

    {
      id: "PFGVI28",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the confidence and capability of people and communities",
      type: "Child",
    },
    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "DSSGP1",
      display: "Better Skilled & Educated",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description: "(Economic wellbeing): We are better skilled and educated",
      type: "Parent",
    },
    {
      id: "DSSGP2",
      display: "Strong & Competitive Economy",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We prosper though a strong, sustainable and competitive economy",
      type: "Parent",
    },
    {
      id: "DSSGP3",
      display: "Cultural Destination",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We live in the cultural destination of choice",
      type: "Parent",
    },
    {
      id: "DSSGP4",
      display: "Live Sustainably",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We live sustainably - protecting and enhancing the environment",
      type: "Parent",
    },
    {
      id: "DSSGP5",
      display: "Connect through Infrastructure",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "DSSGP6",
      display: "Long fulfilling Lives",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live long, healthy and fulfilling lives",
      type: "Parent",
    },
    {
      id: "DSSGP7",
      display: "Community",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live in a shared, equal and safe community ",
      type: "Parent",
    },
    {
      id: "DSSGP8",
      display: "Best start in Life",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): Our children and young people have the best start in life",
      type: "Parent",
    },
    {
      id: "DSGPA6.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "A strong focus on mental health and wellbeing across the lifetime of our people based on models of prevention, pathways to recovery and the Future Foyles research and green prescriptions",
      type: "Child",
    },
    {
      id: "DSGPA6.13",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Work with our cultural partners to use engagement with arts and cultural heritage as a means of improving the health and wellbeing of our citizens",
      type: "Child",
    },
    {
      id: "DSGPA7.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Foster positive community identities, creativity and build community capacity and resilience through a range of interventions",
      type: "Child",
    },
    {
      id: "DSGPA7.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop co-design and co-production ways of working to deliver improved outcomes for our people",
      type: "Child",
    },
    {
      id: "PHMLB1",
      display: "Quality Parenting & Family Support",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Good quality parenting and family support",
      type: "Parent",
    },
    {
      id: "PHMLB2",
      display: "Healthy & Confident Children",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Healthy and confident children and young people",
      type: "Parent",
    },
    {
      id: "PHMLB3",
      display: "Skilled for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Children and young people skilled for life",
      type: "Parent",
    },
    {
      id: "PHMLB4",
      display: "Ready for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Ready for adult life",
      type: "Parent",
    },
    {
      id: "PHMLB5",
      display: "Employment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 2: Equipped throughout Life): Employment, life-long learning and participation",
      type: "Parent",
    },
    {
      id: "PHMLB6",
      display: "Ageing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Healthy active ageing",
      type: "Parent",
    },
    {
      id: "PHMLB7",
      display: "Harm Reduction",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved health and reduction in harm",
      type: "Parent",
    },
    {
      id: "PHMLB8",
      display: "Mental Health & Wellbeing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved mental health and wellbeing, and reduction in self harm and suicide",
      type: "Parent",
    },
    {
      id: "PHMLB9",
      display: "Better Informed",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): People are better informed about health matters",
      type: "Parent",
    },
    {
      id: "PHMLB10",
      display: "Prevention",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Prevention embedded in services",
      type: "Parent",
    },
    {
      id: "PHMLB11",
      display: "Standard of Living",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): A decent standard of living",
      type: "Parent",
    },
    {
      id: "PHMLB12",
      display: "Physical Evironment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): Making the most of the physical environment",
      type: "Parent",
    },
    {
      id: "PHMLB13",
      display: "Safe & Healthy Homes",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 4: Creating the Conditions): Safe and healthy homes",
      type: "Parent",
    },
    {
      id: "PHMLB14",
      display: "Thriving Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Thriving communities",
      type: "Parent",
    },
    {
      id: "PHMLB15",
      display: "Safe Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Safe communities",
      type: "Parent",
    },
    {
      id: "PHMLB16",
      display: "Safe & Healthy Workplaces",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 5: Empowering communities): Safe and healthy workplaces",
      type: "Parent",
    },
    {
      id: "PHMLB17",
      display: "Strategic Approach",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): A Strategic Approach to Public Health",
      type: "Parent",
    },
    {
      id: "PHMLB18",
      display: "Collaboration",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): Strengthened collaboration for health and wellbeing",
      type: "Parent",
    },
    {
      id: "PMLBI12.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Protect and promote good health and wellbeing",
      type: "Child",
    },
    {
      id: "PMLBI17.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Maximise the spend on prevention and early intervention",
      type: "Child",
    },
    {
      id: "PMLBI17.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote a planned and co-ordinated approach to research and development (R&D) activity to support improved public health",
      type: "Child",
    },
    {
      id: "PMLBI18.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities to strengthen local collaboration through the joint working arrangements between PHA and local government, and the outworking of local government reform and the new statutory duty of Community Planning process",
      type: "Child",
    },
    {
      id: "PMLBI18.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Work collaboratively across government agencies to map assets (physical and people) which could be used to tackle inequalities in health",
      type: "Child",
    },
    {
      id: "PMLBI18.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Improve availability and use of data across all levels and sectors for the purposes of identifying priorities, planning action, monitoring trends and evaluating which actions are the most effective",
      type: "Child",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },
    {
      id: "UNSDT11.a",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning",
      type: "Child",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO3",
      display: "Responsible Media",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Enhance responsible media reporting on suicide",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO9",
      display: "Effective Support",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure the provision of effective support for those who are exposed to suicide or suicidal behaviour",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPA9.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide a consistent, compassionate approach to supporting those bereaved/affected by suicide, including family and social circle",
      type: "Child",
    },
    {
      id: "PLSPA9.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Facilitate support networks for people bereaved by suicide and their role in influencing policy and service delivery",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA4.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure effective co-ordination with Council community planning on suicide prevention by embedding suicide prevention in all District Council “Community Plans”",
      type: "Child",
    },
    {
      id: "PLSPA2.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote awareness of available support, including de-escalation and bereavement services",
      type: "Child",
    },
    {
      id: "PLSPA2.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "3 Promote positive use of the internet & social media in relation to suicide prevention & selfharm reduction",
      type: "Child",
    },
    {
      id: "PLSPA3.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote use of, and compliance with, media guidelines on the reporting of suicide; review & update guidelines as necessary",
      type: "Child",
    },
    {
      id: "PLSPA3.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Monitor media reporting and challenge inappropriate reporting",
      type: "Child",
    },
    {
      id: "PLSPA3.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote best practice guidelines on memorials/ public gatherings/ social media postings",
      type: "Child",
    },
    {
      id: "PLSPA3.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure that Northern Ireland is part of the UK-wide arrangements to promote & encourage sensitive reporting of suicide online and in social media, and for making the internet safer for those who are vulnerable to suicide",
      type: "Child",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Work with the All Party Group on Suicide Prevention to build further societal commitment to reduce suicide and selfharm",
      type: "Child",
    },
    {
      id: "PLSPA10.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Identify priorities for local research into suicide, self-harm & their prevention including data linkage; promote, encourage and commission local research",
      type: "Child",
    },
  ],
  links: [],
};

var foyleOverall = {
  nodes: [
    {
      id: "PFGOV1",
      display: "Economy",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We prosper through a strong, competitive, regionally balanced economy",
      type: "Parent",
    },
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV10",
      display: "Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We are a confident, welcoming, outward-looking society",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI21",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the competitiveness of the economy",
      type: "Child",
    },
    {
      id: "PFGVI22",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase innovation in our economy",
      type: "Child",
    },
    {
      id: "PFGVI26",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase respect for each other",
      type: "Child",
    },
    {
      id: "PFGVI28",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the confidence and capability of people and communities",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },
    {
      id: "PFGVI35",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase reconciliation",
      type: "Child",
    },
    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "DSSGP1",
      display: "Better Skilled & Educated",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description: "(Economic wellbeing): We are better skilled and educated",
      type: "Parent",
    },
    {
      id: "DSSGP2",
      display: "Strong & Competitive Economy",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We prosper though a strong, sustainable and competitive economy",
      type: "Parent",
    },
    {
      id: "DSSGP3",
      display: "Cultural Destination",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We live in the cultural destination of choice",
      type: "Parent",
    },
    {
      id: "DSSGP4",
      display: "Live Sustainably",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We live sustainably - protecting and enhancing the environment",
      type: "Parent",
    },
    {
      id: "DSSGP5",
      display: "Connect through Infrastructure",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "DSSGP6",
      display: "Long fulfilling Lives",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live long, healthy and fulfilling lives",
      type: "Parent",
    },
    {
      id: "DSSGP7",
      display: "Community",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live in a shared, equal and safe community ",
      type: "Parent",
    },
    {
      id: "DSSGP8",
      display: "Best start in Life",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): Our children and young people have the best start in life",
      type: "Parent",
    },
    {
      id: "DSGPA3.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and promote the use of the District’s waterways and in particular the River Foyle as a tourism attraction",
      type: "Child",
    },
    {
      id: "DSGPA6.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "A strong focus on mental health and wellbeing across the lifetime of our people based on models of prevention, pathways to recovery and the Future Foyles research and green prescriptions",
      type: "Child",
    },
    {
      id: "DSGPA6.7",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop an age friendly City and Region through an integrated programme of action, based on a rights based approach and on the eight World Health Organisations’ key themes",
      type: "Child",
    },
    {
      id: "DSGPA7.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop co-design and co-production ways of working to deliver improved outcomes for our people",
      type: "Child",
    },
    {
      id: "PHMLB7",
      display: "Harm Reduction",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved health and reduction in harm",
      type: "Parent",
    },
    {
      id: "PHMLB8",
      display: "Mental Health & Wellbeing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved mental health and wellbeing, and reduction in self harm and suicide",
      type: "Parent",
    },
    {
      id: "PHMLB10",
      display: "Prevention",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Prevention embedded in services",
      type: "Parent",
    },
    {
      id: "PHMLB11",
      display: "Standard of Living",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): A decent standard of living",
      type: "Parent",
    },
    {
      id: "PHMLB17",
      display: "Strategic Approach",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): A Strategic Approach to Public Health",
      type: "Parent",
    },
    {
      id: "PHMLB18",
      display: "Collaboration",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): Strengthened collaboration for health and wellbeing",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PMLBI12.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Protect and promote good health and wellbeing",
      type: "Child",
    },
    {
      id: "PMLBI12.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Enhance the capacity of our physical infrastructure to protect, support and provide access to healthy and active living and wellbeing ",
      type: "Child",
    },
    {
      id: "PMLBI17.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Maximise the spend on prevention and early intervention",
      type: "Child",
    },
    {
      id: "PMLBI17.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote a planned and co-ordinated approach to research and development (R&D) activity to support improved public health",
      type: "Child",
    },
    {
      id: "PMLBI18.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Improve availability and use of data across all levels and sectors for the purposes of identifying priorities, planning action, monitoring trends and evaluating which actions are the most effective",
      type: "Child",
    },
    {
      id: "PMLBI18.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "In partnership with relevant departments, agencies, other sectors, local government and communities, develop and implement regional programmes to address health and wellbeing priorities in line with this framework",
      type: "Child",
    },
    {
      id: "UNSDG3",
      display: "Good Health & Wellbeing",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Good Health & Wellbeing",
      type: "Parent",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote UK-wide & North / South cooperation on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA10.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Identify priorities for local research into suicide, self-harm & their prevention including data linkage; promote, encourage and commission local research",
      type: "Child",
    },
    {
      id: "PLSPA10.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Conduct ongoing surveillance to monitor changing behaviours or trends in suicide and self-harm means to inform preventative action, particularly where new methods emerge",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PFGOV1",
      display: "Economy",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We prosper through a strong, competitive, regionally balanced economy",
      type: "Parent",
    },

    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV10",
      display: "Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We are a confident, welcoming, outward-looking society",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI14",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the skills profile of the population",
      type: "Child",
    },
    {
      id: "PFGVI21",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the competitiveness of the economy",
      type: "Child",
    },
    {
      id: "PFGVI22",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase innovation in our economy",
      type: "Child",
    },
    {
      id: "PFGVI23",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Improve transport connections for people, goods and services",
      type: "Child",
    },

    {
      id: "PFGVI25",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the use of public transport and active travel",
      type: "Child",
    },
    {
      id: "PFGVI26",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase respect for each other",
      type: "Child",
    },
    {
      id: "PFGVI27",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve cultural participation",
      type: "Child",
    },
    {
      id: "PFGVI28",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the confidence and capability of people and communities",
      type: "Child",
    },
    {
      id: "PFGVI29",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase environmental sustainability",
      type: "Child",
    },
    {
      id: "PFGVI30",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our attractiveness as a destination",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },

    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "PHMLB1",
      display: "Quality Parenting & Family Support",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Good quality parenting and family support",
      type: "Parent",
    },
    {
      id: "PHMLB2",
      display: "Healthy & Confident Children",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Healthy and confident children and young people",
      type: "Parent",
    },
    {
      id: "PHMLB3",
      display: "Skilled for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Children and young people skilled for life",
      type: "Parent",
    },
    {
      id: "PHMLB4",
      display: "Ready for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Ready for adult life",
      type: "Parent",
    },
    {
      id: "PHMLB5",
      display: "Employment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 2: Equipped throughout Life): Employment, life-long learning and participation",
      type: "Parent",
    },
    {
      id: "PHMLB6",
      display: "Ageing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Healthy active ageing",
      type: "Parent",
    },
    {
      id: "PHMLB7",
      display: "Harm Reduction",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved health and reduction in harm",
      type: "Parent",
    },
    {
      id: "PHMLB8",
      display: "Mental Health & Wellbeing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved mental health and wellbeing, and reduction in self harm and suicide",
      type: "Parent",
    },
    {
      id: "PHMLB9",
      display: "Better Informed",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): People are better informed about health matters",
      type: "Parent",
    },
    {
      id: "PHMLB10",
      display: "Prevention",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Prevention embedded in services",
      type: "Parent",
    },
    {
      id: "PHMLB11",
      display: "Standard of Living",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): A decent standard of living",
      type: "Parent",
    },
    {
      id: "PHMLB12",
      display: "Physical Evironment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): Making the most of the physical environment",
      type: "Parent",
    },
    {
      id: "PHMLB13",
      display: "Safe & Healthy Homes",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 4: Creating the Conditions): Safe and healthy homes",
      type: "Parent",
    },
    {
      id: "PHMLB14",
      display: "Thriving Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Thriving communities",
      type: "Parent",
    },
    {
      id: "PHMLB15",
      display: "Safe Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Safe communities",
      type: "Parent",
    },
    {
      id: "PHMLB16",
      display: "Safe & Healthy Workplaces",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 5: Empowering communities): Safe and healthy workplaces",
      type: "Parent",
    },
    {
      id: "PHMLB17",
      display: "Strategic Approach",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): A Strategic Approach to Public Health",
      type: "Parent",
    },
    {
      id: "PHMLB18",
      display: "Collaboration",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): Strengthened collaboration for health and wellbeing",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO3",
      display: "Responsible Media",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Enhance responsible media reporting on suicide",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO9",
      display: "Effective Support",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure the provision of effective support for those who are exposed to suicide or suicidal behaviour",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },
    {
      id: "UNSDT4.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development",
      type: "Child",
    },
    {
      id: "UNSDT8.8",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "DSGPA2.11",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop vibrant social economy, creative and cultural sectors through targeted support programmes",
      type: "Child",
    },
    {
      id: "DSGPA3.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and promote the use of the District’s waterways and in particular the River Foyle as a tourism attraction",
      type: "Child",
    },
    {
      id: "DSGPA4.5",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Progress the development of regionally significant regeneration sites in Ebrington, Fort George, Derry City Centre and Strabane Town Centre in collaboration with government and private sector partners",
      type: "Child",
    },
    {
      id: "DSGPA4.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Deliver major local area-based regeneration projects and initiatives including the Top of the Hill masterplan and Drumahoe area development plan",
      type: "Child",
    },
    {
      id: "DSGPA4.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "To design and deliver high quality public realm schemes in our urban centres using innovative arts and cultural interventions",
      type: "Child",
    },
    {
      id: "DSGPA5.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Delivery of strategic road infrastructure whilst also enhancing greenway provision (or active travel opportunities)",
      type: "Child",
    },
    {
      id: "DSGPA6.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "A strong focus on mental health and wellbeing across the lifetime of our people based on models of prevention, pathways to recovery and the Future Foyles research and green prescriptions",
      type: "Child",
    },
    {
      id: "DSGPA6.13",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Work with our cultural partners to use engagement with arts and cultural heritage as a means of improving the health and wellbeing of our citizens",
      type: "Child",
    },
    {
      id: "DSGPA7.2",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Promote greater integration and inclusion within and between communities through animating shared spaces, services and facilities and the development of rural community clusters",
      type: "Child",
    },
    {
      id: "DSGPA7.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Foster positive community identities, creativity and build community capacity and resilience through a range of interventions",
      type: "Child",
    },
    {
      id: "DSGPA7.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Reduce crime, disorder and intercommunity tensions by addressing interface and contested spaces issues and improve safety",
      type: "Child",
    },
    {
      id: "DSGPA7.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop co-design and co-production ways of working to deliver improved outcomes for our people",
      type: "Child",
    },
    {
      id: "DSGPA8.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Provide positive opportunities for children and young people to take part in play, music, arts, drama, physical activity and sport",
      type: "Child",
    },
    {
      id: "PMLBI2.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities for every child and young person to develop confidence, personal resilience and basic skills required for life",
      type: "Child",
    },
    {
      id: "PMLBI2.6",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote the benefits of play and leisure and increase the opportunities for children and young people to enjoy it",
      type: "Child",
    },
    {
      id: "PMLBI12.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Protect and promote good health and wellbeing",
      type: "Child",
    },
    {
      id: "PMLBI12.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Enhance the capacity of our physical infrastructure to protect, support and provide access to healthy and active living and wellbeing ",
      type: "Child",
    },
    {
      id: "PMLBI14.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Strengthen and promote thriving communities which are welcoming, accessible and safe, and which support social inclusion",
      type: "Child",
    },
    {
      id: "PMLBI14.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Develop more cohesive and engaged communities by developing volunteering and active citizenship, and empower local people",
      type: "Child",
    },
    {
      id: "PMLBI14.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote healthy and thriving communities at local level, with a particular focus on disadvantaged areas",
      type: "Child",
    },
    {
      id: "PMLBI17.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Maximise the spend on prevention and early intervention",
      type: "Child",
    },
    {
      id: "PMLBI17.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote a planned and co-ordinated approach to research and development (R&D) activity to support improved public health",
      type: "Child",
    },
    {
      id: "PMLBI18.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities to strengthen local collaboration through the joint working arrangements between PHA and local government, and the outworking of local government reform and the new statutory duty of Community Planning process",
      type: "Child",
    },
    {
      id: "PMLBI18.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "In partnership with relevant departments, agencies, other sectors, local government and communities, develop and implement regional programmes to address health and wellbeing priorities in line with this framework",
      type: "Child",
    },
    {
      id: "PMLBI18.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities for local partnership action working with local communities to –  •establish a network of community led gardens and allotments which promote health and wellbeing •develop child friendly spaces through a neighbourhood approach to community safety •promote health and wellbeing of older people in their own homes through a home visitation scheme",
      type: "Child",
    },
    {
      id: "PLSPA1.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote UK-wide & North / South cooperation on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA1.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote mental health & wellbeing through arts, culture, leisure, libraries and sport",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA10.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Conduct ongoing surveillance to monitor changing behaviours or trends in suicide and self-harm means to inform preventative action, particularly where new methods emerge",
      type: "Child",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },

    {
      id: "UNSDT11.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },

    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },
    {
      id: "PFGVI2",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce health inequality",
      type: "Child",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI5",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the quality of the healthcare experience",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI11",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve educational outcomes",
      type: "Child",
    },
    {
      id: "PFGVI12",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce educational inequality",
      type: "Child",
    },
    {
      id: "PFGVI13",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the quality of education",
      type: "Child",
    },
    {
      id: "PFGVI14",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the skills profile of the population",
      type: "Child",
    },
    {
      id: "PFGVI15",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve child development",
      type: "Child",
    },
    {
      id: "PFGVI16",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the proportion of people in work",
      type: "Child",
    },
    {
      id: "PFGVI17",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce economic inactivity",
      type: "Child",
    },
    {
      id: "PFGVI18",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the proportion of people working in good jobs",
      type: "Child",
    },
    {
      id: "PFGVI20",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the size of the economy",
      type: "Child",
    },
    {
      id: "PFGVI35",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase reconciliation",
      type: "Child",
    },
    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "PFGVI41",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the proportion of graduates moving into employment or on to further study",
      type: "Child",
    },
    {
      id: "DSSGP1",
      display: "Better Skilled & Educated",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description: "(Economic wellbeing): We are better skilled and educated",
      type: "Parent",
    },
    {
      id: "DSSGP2",
      display: "Strong & Competitive Economy",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We prosper though a strong, sustainable and competitive economy",
      type: "Parent",
    },
    {
      id: "DSSGP3",
      display: "Cultural Destination",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We live in the cultural destination of choice",
      type: "Parent",
    },
    {
      id: "DSSGP4",
      display: "Live Sustainably",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We live sustainably - protecting and enhancing the environment",
      type: "Parent",
    },
    {
      id: "DSSGP5",
      display: "Connect through Infrastructure",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "DSSGP6",
      display: "Long fulfilling Lives",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live long, healthy and fulfilling lives",
      type: "Parent",
    },
    {
      id: "DSSGP7",
      display: "Community",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live in a shared, equal and safe community ",
      type: "Parent",
    },
    {
      id: "DSSGP8",
      display: "Best start in Life",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): Our children and young people have the best start in life",
      type: "Parent",
    },
    {
      id: "PHMLB2",
      display: "Healthy & Confident Children",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Healthy and confident children and young people",
      type: "Parent",
    },
    {
      id: "PHMLB3",
      display: "Skilled for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Children and young people skilled for life",
      type: "Parent",
    },
    {
      id: "PHMLB4",
      display: "Ready for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Ready for adult life",
      type: "Parent",
    },
    {
      id: "PHMLB5",
      display: "Employment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 2: Equipped throughout Life): Employment, life-long learning and participation",
      type: "Parent",
    },
    {
      id: "PHMLB6",
      display: "Ageing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Healthy active ageing",
      type: "Parent",
    },
    {
      id: "PHMLB7",
      display: "Harm Reduction",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved health and reduction in harm",
      type: "Parent",
    },
    {
      id: "PHMLB8",
      display: "Mental Health & Wellbeing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved mental health and wellbeing, and reduction in self harm and suicide",
      type: "Parent",
    },
    {
      id: "PHMLB9",
      display: "Better Informed",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): People are better informed about health matters",
      type: "Parent",
    },
    {
      id: "PHMLB10",
      display: "Prevention",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Prevention embedded in services",
      type: "Parent",
    },
    {
      id: "PHMLB11",
      display: "Standard of Living",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): A decent standard of living",
      type: "Parent",
    },
    {
      id: "PHMLB12",
      display: "Physical Evironment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): Making the most of the physical environment",
      type: "Parent",
    },
    {
      id: "PHMLB14",
      display: "Thriving Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Thriving communities",
      type: "Parent",
    },
    {
      id: "PHMLB15",
      display: "Safe Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Safe communities",
      type: "Parent",
    },
    {
      id: "PHMLB16",
      display: "Safe & Healthy Workplaces",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 5: Empowering communities): Safe and healthy workplaces",
      type: "Parent",
    },
    {
      id: "PHMLB17",
      display: "Strategic Approach",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): A Strategic Approach to Public Health",
      type: "Parent",
    },
    {
      id: "PHMLB18",
      display: "Collaboration",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): Strengthened collaboration for health and wellbeing",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO9",
      display: "Effective Support",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure the provision of effective support for those who are exposed to suicide or suicidal behaviour",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "UNSDT1.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },
    {
      id: "UNSDT3.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol",
      type: "Child",
    },
    {
      id: "UNSDT4.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship",
      type: "Child",
    },
    {
      id: "UNSDT4.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development",
      type: "Child",
    },
    {
      id: "UNSDT8.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors",
      type: "Child",
    },
    {
      id: "UNSDT8.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services",
      type: "Child",
    },
    {
      id: "UNSDT8.6",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        " By 2020, substantially reduce the proportion of youth not in employment, education or training",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "DSGPA1.2",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and support models of shared education across the Council area – both capital and programme initiatives though a partnership model with a range of sectors.",
      type: "Child",
    },
    {
      id: "DSGPA1.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Work towards securing UNESCO Learning City and Region status, promote and accelerate the practice of life-long learning, develop an active, creative and inclusive learning culture from early education in families, the workplace and communities.",
      type: "Child",
    },
    {
      id: "DSGPA1.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Embed entrepreneurialism and creativity within all learning opportunities in collaboration with appropriate agencies",
      type: "Child",
    },
    {
      id: "DSGPA1.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Promote the importance of educational pathways and promote the apprenticeship framework",
      type: "Child",
    },
    {
      id: "DSGPA2.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Build and Strengthen clusters of Industry specialism in Advanced Manufacturing, Life and Health Sciences, Digital, Creative and Cultural Industries and Tourism",
      type: "Child",
    },
    {
      id: "DSGPA2.8",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop incubation space and opportunities for collaborative public sector shared office space",
      type: "Child",
    },
    {
      id: "DSGPA2.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Provide intensive mentoring support for Entrepreneurs from underrepresented groups",
      type: "Child",
    },
    {
      id: "DSGPA2.10",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Deliver business start-up programmes and development support focused on areas of high economic inactivity and rural community hubs",
      type: "Child",
    },
    {
      id: "DSGPA2.11",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop vibrant social economy, creative and cultural sectors through targeted support programmes",
      type: "Child",
    },
    {
      id: "DSGPA3.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "In conjunction with the Tourism and Arts & Culture strategies develop an ambitious festival and events strategy, sustain and grow the existing festival and events programme, develop capacity, capability and secure events of international appeal and develop signature events around key themes and designations",
      type: "Child",
    },
    {
      id: "DSGPA3.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and promote the use of the District’s waterways and in particular the River Foyle as a tourism attraction",
      type: "Child",
    },
    {
      id: "DSGPA3.10",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Support the arts and cultural ecosystem to become sustainable through new revenue opportunities including additional investment and commercial activity",
      type: "Child",
    },
    {
      id: "DSGPA3.11",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and deliver an Access and Inclusion Programme in partnership with the Public Health Agency encouraging participation and engagement, promoting intercultural diversity, wellbeing and promoting accessible cultural experiences",
      type: "Child",
    },
    {
      id: "DSGPA4.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Deliver major local area-based regeneration projects and initiatives including the Top of the Hill masterplan and Drumahoe area development plan",
      type: "Child",
    },
    {
      id: "DSGPA4.7",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Support the implementation of the Urban Villages Programme in the Bogside, Fountain and Bishop Street areas to foster positive community identities, build community capacity and improve the physical environment of the area.",
      type: "Child",
    },
    {
      id: "DSGPA4.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "To design and deliver high quality public realm schemes in our urban centres using innovative arts and cultural interventions",
      type: "Child",
    },
    {
      id: "DSGPA4.10",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Enhancement of the natural environment through biodiversity action planning and landscape scale conservation projects to protect and enhance natural environmental assets",
      type: "Child",
    },
    {
      id: "DSGPA6.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "A strong focus on mental health and wellbeing across the lifetime of our people based on models of prevention, pathways to recovery and the Future Foyles research and green prescriptions",
      type: "Child",
    },
    {
      id: "DSGPA6.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop community based support for the delivery of crisis intervention services",
      type: "Child",
    },
    {
      id: "DSGPA6.7",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop an age friendly City and Region through an integrated programme of action, based on a rights based approach and on the eight World Health Organisations’ key themes",
      type: "Child",
    },
    {
      id: "DSGPA6.8",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Support cross-border collaboration in health and social care with a focus on early intervention with vulnerable families; promotion of positive mental health and well-being; supporting independence and inclusion of older people; and citizenship for people with disabilities",
      type: "Child",
    },
    {
      id: "DSGPA6.13",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Work with our cultural partners to use engagement with arts and cultural heritage as a means of improving the health and wellbeing of our citizens",
      type: "Child",
    },
    {
      id: "DSGPA7.2",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Promote greater integration and inclusion within and between communities through animating shared spaces, services and facilities and the development of rural community clusters",
      type: "Child",
    },
    {
      id: "DSGPA7.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Foster positive community identities, creativity and build community capacity and resilience through a range of interventions",
      type: "Child",
    },
    {
      id: "DSGPA7.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Reduce crime, disorder and intercommunity tensions by addressing interface and contested spaces issues and improve safety",
      type: "Child",
    },
    {
      id: "DSGPA7.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop co-design and co-production ways of working to deliver improved outcomes for our people",
      type: "Child",
    },
    {
      id: "DSGPA8.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Provide positive opportunities for children and young people to take part in play, music, arts, drama, physical activity and sport",
      type: "Child",
    },
    {
      id: "DSGPA8.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Establish local structures to allow children and young people to be involved in decisions which affect them and have their voices heard, including establishment of a Youth Council",
      type: "Child",
    },
    {
      id: "PMLBI4.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote employability schemes in public and private sectors targeted at young and long term unemployed",
      type: "Child",
    },
    {
      id: "PMLBI6.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote healthy active ageing, through opportunities to participate including for example through volunteering and opportunities for learning",
      type: "Child",
    },
    {
      id: "PMLBI6.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Delivery of the cross-cutting Active Ageing Strategy which will promote age friendly environments using the WHO Age Friendly Environments programme",
      type: "Child",
    },
    {
      id: "PMLBI6.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Take forward public engagement to promote good nutrition",
      type: "Child",
    },
    {
      id: "PMLBI8.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Increase resilience and improve mental wellbeing in children and young people through implementation of initiatives outlined in theme 1 including eg Family Support, Roots of Empathy, iMatter (pupil’s emotional health and wellbeing programme) – particular focus on children and young people from families at risk",
      type: "Child",
    },
    {
      id: "PMLBI8.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Reduce the levels of self harm through roll out of successfully evaluated approaches, focussing in particular on people who repeatedly self harm, people treated at A&E for injuries due to deliberate self harm",
      type: "Child",
    },
    {
      id: "PMLBI10.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Increase the emphasis on prevention and early intervention in the commissioning and delivery of Primary, Community, and Secondary Care services",
      type: "Child",
    },
    {
      id: "PMLBI11.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Reduce economic inactivity through development and implementation of a strategy for skills, training, incentives and job creation, and careers advice",
      type: "Child",
    },
    {
      id: "PMLBI11.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Provide more opportunities for work experience and employment through, for example, maximising the use of social clauses in procurement contracts, and the potential contribution of employability schemes through public and private sector organisations – this focuses on the unemployed, particularly the young and long term",
      type: "Child",
    },

    {
      id: "PMLBI12.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Protect and promote good health and wellbeing",
      type: "Child",
    },
    {
      id: "PMLBI12.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Enhance the capacity of our physical infrastructure to protect, support and provide access to healthy and active living and wellbeing ",
      type: "Child",
    },
    {
      id: "PMLBI14.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Strengthen and promote thriving communities which are welcoming, accessible and safe, and which support social inclusion",
      type: "Child",
    },
    {
      id: "PMLBI14.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Develop more cohesive and engaged communities by developing volunteering and active citizenship, and empower local people",
      type: "Child",
    },
    {
      id: "PMLBI14.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Through the Social Investment Fund, support communities to Build Pathways to Employment by tackling educational under achievement and barriers to employment; tackling skills deficits and promoting job brokerage, widening access to the labour market, promoting business start up and increasing sustainability through social enterprise – focus on targeted areas and population groups",
      type: "Child",
    },
    {
      id: "PMLBI14.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote healthy and thriving communities at local level, with a particular focus on disadvantaged areas",
      type: "Child",
    },
    {
      id: "PMLBI14.9",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Ensure that everyone has an opportunity to volunteer and that volunteering is representative of the diversity of the community",
      type: "Child",
    },
    {
      id: "PMLBI16.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Support more businesses to provide workplace health and wellbeing programmes to secure –  •improved physical and mental wellbeing  •reduction in the number of reportable work related injuries •prevention, control and management of key occupational health hazards •awareness raising and advisory campaigns to highlight the dangers of carbon monoxide and promote appropriate management of risk •appropriate control of risks to the public from harmful organisms encountered in, or associated with workplaces such as legionella sp, E.coli sp",
      type: "Child",
    },
    {
      id: "PMLBI17.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Establish governance, implementation, engagement and monitoring arrangements at strategic, regional and local levels which interconnect to create a whole system approach ",
      type: "Child",
    },
    {
      id: "PMLBI17.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Maximise the spend on prevention and early intervention",
      type: "Child",
    },
    {
      id: "PMLBI17.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote a planned and co-ordinated approach to research and development (R&D) activity to support improved public health",
      type: "Child",
    },
    {
      id: "PMLBI18.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities to strengthen local collaboration through the joint working arrangements between PHA and local government, and the outworking of local government reform and the new statutory duty of Community Planning process",
      type: "Child",
    },
    {
      id: "PMLBI18.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Improve availability and use of data across all levels and sectors for the purposes of identifying priorities, planning action, monitoring trends and evaluating which actions are the most effective",
      type: "Child",
    },
    {
      id: "PMLBI18.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "In partnership with relevant departments, agencies, other sectors, local government and communities, develop and implement regional programmes to address health and wellbeing priorities in line with this framework",
      type: "Child",
    },
    {
      id: "PMLBI18.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities for local partnership action working with local communities to –  •establish a network of community led gardens and allotments which promote health and wellbeing •develop child friendly spaces through a neighbourhood approach to community safety •promote health and wellbeing of older people in their own homes through a home visitation scheme",
      type: "Child",
    },
    {
      id: "PLSPA2.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Develop and deliver public education programmes: to increase awareness of the signs and symptoms of emotional distress and of the appropriate response; to reduce stigma around mental illness; and to encourage help-seeking behaviour",
      type: "Child",
    },
    {
      id: "PLSPA4.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support, encourage and procure communitybased suicide prevention services",
      type: "Child",
    },
    {
      id: "PLSPA4.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide practical support to employers on mentally healthy workplaces and supporting employees experiencing emotional crisis",
      type: "Child",
    },
    {
      id: "PLSPA4.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Encourage universities, colleges, schools and training organisations to promote a culture of help-seeking behaviour and suicide prevention awareness among their students and trainees",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA7.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide timely, accessible de-escalation services for those in emotional crisis or despair",
      type: "Child",
    },
    {
      id: "PLSPA9.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide a consistent, compassionate approach to supporting those bereaved/affected by suicide, including family and social circle",
      type: "Child",
    },
    {
      id: "PLSPA9.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Facilitate support networks for people bereaved by suicide and their role in influencing policy and service delivery",
      type: "Child",
    },
    {
      id: "PLSPA9.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide support and reflective practice for professionals who experience loss of patient or client to suicide and their work on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA9.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support families and other informal carers in caring for suicidal individuals to help them manage suicidal behaviours and emotional distress; and to look after their own mental wellbeing",
      type: "Child",
    },
    {
      id: "PLSPA9.7",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Implement recommendations of the PHA review of the Sudden Deaths Notification process and the Community Response Plan process",
      type: "Child",
    },
    {
      id: "PLSPA9.8",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure contracted organisations adhere to PHA Quality Standards of Services promoting mental and emotional wellbeing and suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA9.9",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support for school staff to help them provide effective support to children & young people affected by suicide or suicidal behaviours at home",
      type: "Child",
    },
    {
      id: "UNSDT11.3",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries",
      type: "Child",
    },
    {
      id: "UNSDT11.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen efforts to protect and safeguard the world’s cultural and natural heritage",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },
    {
      id: "UNSDT11.a",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning",
      type: "Child",
    },
    {
      id: "PFGOV1",
      display: "Economy",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We prosper through a strong, competitive, regionally balanced economy",
      type: "Parent",
    },
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV10",
      display: "Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We are a confident, welcoming, outward-looking society",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },

    {
      id: "PFGOV1",
      display: "Economy",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We prosper through a strong, competitive, regionally balanced economy",
      type: "Parent",
    },
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV10",
      display: "Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We are a confident, welcoming, outward-looking society",
      type: "Parent",
    },
    {
      id: "PFGOV11",
      display: "Public Services",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have high quality public services",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV13",
      display: "Infrastructure",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI1",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce crime",
      type: "Child",
    },

    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },
    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI14",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve the skills profile of the population",
      type: "Child",
    },

    {
      id: "PFGVI22",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase innovation in our economy",
      type: "Child",
    },
    {
      id: "PFGVI23",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Improve transport connections for people, goods and services",
      type: "Child",
    },
    {
      id: "PFGVI25",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase the use of public transport and active travel",
      type: "Child",
    },
    {
      id: "PFGVI26",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase respect for each other",
      type: "Child",
    },
    {
      id: "PFGVI27",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve cultural participation",
      type: "Child",
    },
    {
      id: "PFGVI28",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the confidence and capability of people and communities",
      type: "Child",
    },

    {
      id: "PFGVI30",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our attractiveness as a destination",
      type: "Child",
    },
    {
      id: "PFGVI31",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase shared space",
      type: "Child",
    },
    {
      id: "PFGVI35",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase reconciliation",
      type: "Child",
    },
    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "DSSGP1",
      display: "Better Skilled & Educated",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description: "(Economic wellbeing): We are better skilled and educated",
      type: "Parent",
    },
    {
      id: "DSSGP2",
      display: "Strong & Competitive Economy",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We prosper though a strong, sustainable and competitive economy",
      type: "Parent",
    },
    {
      id: "DSSGP3",
      display: "Cultural Destination",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We live in the cultural destination of choice",
      type: "Parent",
    },
    {
      id: "DSSGP4",
      display: "Live Sustainably",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We live sustainably - protecting and enhancing the environment",
      type: "Parent",
    },
    {
      id: "DSSGP5",
      display: "Connect through Infrastructure",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "DSSGP6",
      display: "Long fulfilling Lives",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live long, healthy and fulfilling lives",
      type: "Parent",
    },
    {
      id: "DSSGP7",
      display: "Community",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live in a shared, equal and safe community ",
      type: "Parent",
    },
    {
      id: "DSSGP8",
      display: "Best start in Life",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): Our children and young people have the best start in life",
      type: "Parent",
    },
    {
      id: "PHMLB12",
      display: "Physical Evironment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): Making the most of the physical environment",
      type: "Parent",
    },
    {
      id: "PHMLB14",
      display: "Thriving Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Thriving communities",
      type: "Parent",
    },
    {
      id: "PHMLB15",
      display: "Safe Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Safe communities",
      type: "Parent",
    },
    {
      id: "PHMLB16",
      display: "Safe & Healthy Workplaces",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 5: Empowering communities): Safe and healthy workplaces",
      type: "Parent",
    },
    {
      id: "PHMLB17",
      display: "Strategic Approach",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): A Strategic Approach to Public Health",
      type: "Parent",
    },
    {
      id: "PHMLB18",
      display: "Collaboration",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): Strengthened collaboration for health and wellbeing",
      type: "Parent",
    },
    {
      id: "PHMLB5",
      display: "Employment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 2: Equipped throughout Life): Employment, life-long learning and participation",
      type: "Parent",
    },
    {
      id: "PHMLB6",
      display: "Ageing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Healthy active ageing",
      type: "Parent",
    },
    {
      id: "PHMLB7",
      display: "Harm Reduction",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved health and reduction in harm",
      type: "Parent",
    },
    {
      id: "PHMLB8",
      display: "Mental Health & Wellbeing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved mental health and wellbeing, and reduction in self harm and suicide",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },
    {
      id: "UNSDT10.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin,religion or economic or other status",
      type: "Child",
    },
    {
      id: "UNSDT4.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship",
      type: "Child",
    },
    {
      id: "UNSDT8.9",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products",
      type: "Child",
    },
    {
      id: "UNSDT9.1",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all",
      type: "Child",
    },
    {
      id: "DSGPA2.11",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop vibrant social economy, creative and cultural sectors through targeted support programmes",
      type: "Child",
    },
    {
      id: "DSGPA3.5",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and promote our heritage assets - in particular managing the Walled City to realise its full potential to the standard of a world heritage site - through capital investment, preservation and a marketing programme. Expand and develop the Walled City Signature Project including Phase 2 of the Lighting Strategy to encompass new attractions",
      type: "Child",
    },
    {
      id: "DSGPA3.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop and promote the use of the District’s waterways and in particular the River Foyle as a tourism attraction",
      type: "Child",
    },
    {
      id: "DSGPA4.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Protect and promote our natural and built heritage assets through the establishment of multi-sectoral heritage partnerships, heritage education programmes, skills specialisms development and integration with our tourism product offering.",
      type: "Child",
    },
    {
      id: "DSGPA4.5",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Progress the development of regionally significant regeneration sites in Ebrington, Fort George, Derry City Centre and Strabane Town Centre in collaboration with government and private sector partners",
      type: "Child",
    },
    {
      id: "DSGPA4.6",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Deliver major local area-based regeneration projects and initiatives including the Top of the Hill masterplan and Drumahoe area development plan",
      type: "Child",
    },
    {
      id: "DSGPA4.7",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Support the implementation of the Urban Villages Programme in the Bogside, Fountain and Bishop Street areas to foster positive community identities, build community capacity and improve the physical environment of the area.",
      type: "Child",
    },
    {
      id: "DSGPA5.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Delivery of strategic road infrastructure whilst also enhancing greenway provision (or active travel opportunities)",
      type: "Child",
    },
    {
      id: "DSGPA6.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "A strong focus on mental health and wellbeing across the lifetime of our people based on models of prevention, pathways to recovery and the Future Foyles research and green prescriptions",
      type: "Child",
    },
    {
      id: "DSGPA6.13",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Work with our cultural partners to use engagement with arts and cultural heritage as a means of improving the health and wellbeing of our citizens",
      type: "Child",
    },
    {
      id: "DSGPA7.2",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Promote greater integration and inclusion within and between communities through animating shared spaces, services and facilities and the development of rural community clusters",
      type: "Child",
    },
    {
      id: "DSGPA7.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Foster positive community identities, creativity and build community capacity and resilience through a range of interventions",
      type: "Child",
    },
    {
      id: "DSGPA7.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Reduce crime, disorder and intercommunity tensions by addressing interface and contested spaces issues and improve safety",
      type: "Child",
    },
    {
      id: "DSGPA7.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop co-design and co-production ways of working to deliver improved outcomes for our people",
      type: "Child",
    },
    {
      id: "DSGPA8.4",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Provide positive opportunities for children and young people to take part in play, music, arts, drama, physical activity and sport",
      type: "Child",
    },
    {
      id: "PMLBI2.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities for every child and young person to develop confidence, personal resilience and basic skills required for life",
      type: "Child",
    },
    {
      id: "PMLBI2.6",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote the benefits of play and leisure and increase the opportunities for children and young people to enjoy it",
      type: "Child",
    },
    {
      id: "PMLBI12.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Protect and promote good health and wellbeing",
      type: "Child",
    },
    {
      id: "PMLBI12.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Enhance the capacity of our physical infrastructure to protect, support and provide access to healthy and active living and wellbeing ",
      type: "Child",
    },
    {
      id: "PMLBI14.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Strengthen and promote thriving communities which are welcoming, accessible and safe, and which support social inclusion",
      type: "Child",
    },
    {
      id: "PMLBI14.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Develop more cohesive and engaged communities by developing volunteering and active citizenship, and empower local people",
      type: "Child",
    },
    {
      id: "PMLBI14.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote healthy and thriving communities at local level, with a particular focus on disadvantaged areas",
      type: "Child",
    },
    {
      id: "PMLBI17.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Maximise the spend on prevention and early intervention",
      type: "Child",
    },
    {
      id: "PMLBI17.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote a planned and co-ordinated approach to research and development (R&D) activity to support improved public health",
      type: "Child",
    },
    {
      id: "PMLBI18.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities to strengthen local collaboration through the joint working arrangements between PHA and local government, and the outworking of local government reform and the new statutory duty of Community Planning process",
      type: "Child",
    },
    {
      id: "PMLBI18.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "In partnership with relevant departments, agencies, other sectors, local government and communities, develop and implement regional programmes to address health and wellbeing priorities in line with this framework",
      type: "Child",
    },
    {
      id: "PMLBI18.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities for local partnership action working with local communities to –  •establish a network of community led gardens and allotments which promote health and wellbeing •develop child friendly spaces through a neighbourhood approach to community safety •promote health and wellbeing of older people in their own homes through a home visitation scheme",
      type: "Child",
    },
    {
      id: "PLSPA1.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote UK-wide & North / South cooperation on suicide prevention",
      type: "Child",
    },
    {
      id: "PLSPA1.5",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote mental health & wellbeing through arts, culture, leisure, libraries and sport",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA10.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Conduct ongoing surveillance to monitor changing behaviours or trends in suicide and self-harm means to inform preventative action, particularly where new methods emerge",
      type: "Child",
    },
    {
      id: "UNSDG11",
      display: "Cities & Communities",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Goals",
      description: "Sustainable Cities and Communities",
      type: "Parent",
    },
    {
      id: "UNSDT11.2",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons",
      type: "Child",
    },
    {
      id: "UNSDT11.4",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Strengthen efforts to protect and safeguard the world’s cultural and natural heritage",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },
    {
      id: "PFGOV1",
      display: "Economy",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We prosper through a strong, competitive, regionally balanced economy",
      type: "Parent",
    },
    {
      id: "PFGOV2",
      display: "Environment",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We live and work sustainably – protecting the environment",
      type: "Parent",
    },
    {
      id: "PFGOV3",
      display: "Equal Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have a more equal society",
      type: "Parent",
    },
    {
      id: "PFGOV4",
      display: "Healthy & Active Lives",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We enjoy long, healthy, active lives",
      type: "Parent",
    },
    {
      id: "PFGOV5",
      display: "Fulfill Potential",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are an innovative, creative society, where people can fulfill their potential",
      type: "Parent",
    },
    {
      id: "PFGOV6",
      display: "Better Jobs",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We have more people working in better jobs",
      type: "Parent",
    },
    {
      id: "PFGOV7",
      display: "Community",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have a safe community where we respect the law, and each other",
      type: "Parent",
    },
    {
      id: "PFGOV8",
      display: "Care",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We care for others and we help those in need",
      type: "Parent",
    },
    {
      id: "PFGOV9",
      display: "Diversity",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We are a shared, welcoming and confident society that respects diversity",
      type: "Parent",
    },
    {
      id: "PFGOV10",
      display: "Society",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description: "We are a confident, welcoming, outward-looking society",
      type: "Parent",
    },
    {
      id: "PFGOV12",
      display: "Attractive Place",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We have created a place where people want to live and work, to visit and invest",
      type: "Parent",
    },
    {
      id: "PFGOV14",
      display: "Best Start in Life",
      parentGroup: "Programme for Government",
      group: "Programme for Government Outcomes",
      description:
        "We give our children and young people the best start in life",
      type: "Parent",
    },
    {
      id: "PFGVI3",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase healthy life expectancy",
      type: "Child",
    },
    {
      id: "PFGVI4",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Reduce preventable deaths",
      type: "Child",
    },

    {
      id: "PFGVI6",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve mental health",
      type: "Child",
    },
    {
      id: "PFGVI11",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve educational outcomes",
      type: "Child",
    },

    {
      id: "PFGVI26",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Increase respect for each other",
      type: "Child",
    },

    {
      id: "PFGVI28",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description:
        "Increase the confidence and capability of people and communities",
      type: "Child",
    },
    {
      id: "PFGVI40",
      display: "",
      parentGroup: "Programme for Government",
      group: "Programme for Government Indicators",
      description: "Improve our international reputation",
      type: "Child",
    },
    {
      id: "DSSGP1",
      display: "Better Skilled & Educated",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description: "(Economic wellbeing): We are better skilled and educated",
      type: "Parent",
    },
    {
      id: "DSSGP2",
      display: "Strong & Competitive Economy",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We prosper though a strong, sustainable and competitive economy",
      type: "Parent",
    },
    {
      id: "DSSGP3",
      display: "Cultural Destination",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Economic wellbeing): We live in the cultural destination of choice",
      type: "Parent",
    },
    {
      id: "DSSGP4",
      display: "Live Sustainably",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We live sustainably - protecting and enhancing the environment",
      type: "Parent",
    },
    {
      id: "DSSGP5",
      display: "Connect through Infrastructure",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Environment and Regeneration): We connect people and opportunities through our infrastructure",
      type: "Parent",
    },
    {
      id: "DSSGP6",
      display: "Long fulfilling Lives",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live long, healthy and fulfilling lives",
      type: "Parent",
    },
    {
      id: "DSSGP7",
      display: "Community",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): We live in a shared, equal and safe community ",
      type: "Parent",
    },
    {
      id: "DSSGP8",
      display: "Best start in Life",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Outcomes",
      description:
        "(Community and Social): Our children and young people have the best start in life",
      type: "Parent",
    },
    {
      id: "DSGPA6.1",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "A strong focus on mental health and wellbeing across the lifetime of our people based on models of prevention, pathways to recovery and the Future Foyles research and green prescriptions",
      type: "Child",
    },
    {
      id: "DSGPA6.13",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Work with our cultural partners to use engagement with arts and cultural heritage as a means of improving the health and wellbeing of our citizens",
      type: "Child",
    },
    {
      id: "DSGPA7.3",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Foster positive community identities, creativity and build community capacity and resilience through a range of interventions",
      type: "Child",
    },
    {
      id: "DSGPA7.9",
      display: "",
      parentGroup:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan",
      group:
        "Derry City And Strabane Districts Inclusive Strategic Growth Plan Actions",
      description:
        "Develop co-design and co-production ways of working to deliver improved outcomes for our people",
      type: "Child",
    },
    {
      id: "PHMLB1",
      display: "Quality Parenting & Family Support",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Good quality parenting and family support",
      type: "Parent",
    },
    {
      id: "PHMLB2",
      display: "Healthy & Confident Children",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Healthy and confident children and young people",
      type: "Parent",
    },
    {
      id: "PHMLB3",
      display: "Skilled for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 1: Giving Every Child the Best Start): Children and young people skilled for life",
      type: "Parent",
    },
    {
      id: "PHMLB4",
      display: "Ready for Life",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Ready for adult life",
      type: "Parent",
    },
    {
      id: "PHMLB5",
      display: "Employment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 2: Equipped throughout Life): Employment, life-long learning and participation",
      type: "Parent",
    },
    {
      id: "PHMLB6",
      display: "Ageing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 2: Equipped throughout Life): Healthy active ageing",
      type: "Parent",
    },
    {
      id: "PHMLB7",
      display: "Harm Reduction",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved health and reduction in harm",
      type: "Parent",
    },
    {
      id: "PHMLB8",
      display: "Mental Health & Wellbeing",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Improved mental health and wellbeing, and reduction in self harm and suicide",
      type: "Parent",
    },
    {
      id: "PHMLB9",
      display: "Better Informed",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): People are better informed about health matters",
      type: "Parent",
    },
    {
      id: "PHMLB10",
      display: "Prevention",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 3: Empowering Healthy Lives): Prevention embedded in services",
      type: "Parent",
    },
    {
      id: "PHMLB11",
      display: "Standard of Living",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): A decent standard of living",
      type: "Parent",
    },
    {
      id: "PHMLB12",
      display: "Physical Evironment",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 4: Creating the Conditions): Making the most of the physical environment",
      type: "Parent",
    },
    {
      id: "PHMLB13",
      display: "Safe & Healthy Homes",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 4: Creating the Conditions): Safe and healthy homes",
      type: "Parent",
    },
    {
      id: "PHMLB14",
      display: "Thriving Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Thriving communities",
      type: "Parent",
    },
    {
      id: "PHMLB15",
      display: "Safe Communities",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description: "(Theme 5: Empowering communities): Safe communities",
      type: "Parent",
    },
    {
      id: "PHMLB16",
      display: "Safe & Healthy Workplaces",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 5: Empowering communities): Safe and healthy workplaces",
      type: "Parent",
    },
    {
      id: "PHMLB17",
      display: "Strategic Approach",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): A Strategic Approach to Public Health",
      type: "Parent",
    },
    {
      id: "PHMLB18",
      display: "Collaboration",
      parentGroup: "Making Life Better",
      group: "Making Life Better Outcomes",
      description:
        "(Theme 6: Developing Collaboration): Strengthened collaboration for health and wellbeing",
      type: "Parent",
    },
    {
      id: "PMLBI12.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Protect and promote good health and wellbeing",
      type: "Child",
    },
    {
      id: "PMLBI17.4",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description: "Maximise the spend on prevention and early intervention",
      type: "Child",
    },
    {
      id: "PMLBI17.5",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Promote a planned and co-ordinated approach to research and development (R&D) activity to support improved public health",
      type: "Child",
    },
    {
      id: "PMLBI18.1",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Maximise opportunities to strengthen local collaboration through the joint working arrangements between PHA and local government, and the outworking of local government reform and the new statutory duty of Community Planning process",
      type: "Child",
    },
    {
      id: "PMLBI18.2",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Work collaboratively across government agencies to map assets (physical and people) which could be used to tackle inequalities in health",
      type: "Child",
    },
    {
      id: "PMLBI18.3",
      display: "",
      parentGroup: "Making Life Better",
      group: "Making Life Better Indicators",
      description:
        "Improve availability and use of data across all levels and sectors for the purposes of identifying priorities, planning action, monitoring trends and evaluating which actions are the most effective",
      type: "Child",
    },
    {
      id: "UNSDT1.5",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters",
      type: "Child",
    },
    {
      id: "UNSDT11.7",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities",
      type: "Child",
    },
    {
      id: "UNSDT11.a",
      display: "",
      parentGroup: "UN Sustainable Development Goals",
      group: "UN Sustainable Development Targets",
      description:
        "Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning",
      type: "Child",
    },
    {
      id: "PLSPO1",
      display: "Right Approach",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure a collaborative, coordinated crossdepartmental approach to suicide prevention  ",
      type: "Parent",
    },
    {
      id: "PLSPO2",
      display: "Improve Awareness",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Improve awareness of suicide prevention and associated services  ",
      type: "Parent",
    },
    {
      id: "PLSPO3",
      display: "Responsible Media",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Enhance responsible media reporting on suicide",
      type: "Parent",
    },
    {
      id: "PLSPO4",
      display: "Community Capacity",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance community capacity to prevent and respond to suicidal behaviour within local communities",
      type: "Parent",
    },
    {
      id: "PLSPO5",
      display: "Mental Health Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Reduce the incidence of suicide amongst people under the care of mental health services",
      type: "Parent",
    },
    {
      id: "PLSPO6",
      display: "Restrict Access",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description: "Restrict access to the means of suicide",
      type: "Parent",
    },
    {
      id: "PLSPO7",
      display: "Response & Recovery",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance the initial response to, and care and recovery of people who are suicidal",
      type: "Parent",
    },
    {
      id: "PLSPO8",
      display: "Enhance Services",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Enhance services for people who selfharm, particularly for those who do so repeatedly",
      type: "Parent",
    },
    {
      id: "PLSPO9",
      display: "Effective Support",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Ensure the provision of effective support for those who are exposed to suicide or suicidal behaviour",
      type: "Parent",
    },
    {
      id: "PLSPO10",
      display: "Effective Interventions",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Objectives",
      description:
        "Strengthen the local evidence on suicide patterns, trends and risk, and on effective interventions to prevent suicide and self-harm",
      type: "Parent",
    },
    {
      id: "PLSPA9.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Provide a consistent, compassionate approach to supporting those bereaved/affected by suicide, including family and social circle",
      type: "Child",
    },
    {
      id: "PLSPA9.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Facilitate support networks for people bereaved by suicide and their role in influencing policy and service delivery",
      type: "Child",
    },
    {
      id: "PLSPA6.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Reduce risk of suicide at high risk locations, engaging with local stakeholders and developing plans for enhancing safety at those locations",
      type: "Child",
    },
    {
      id: "PLSPA4.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure effective co-ordination with Council community planning on suicide prevention by embedding suicide prevention in all District Council “Community Plans”",
      type: "Child",
    },
    {
      id: "PLSPA2.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote awareness of available support, including de-escalation and bereavement services",
      type: "Child",
    },
    {
      id: "PLSPA2.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "3 Promote positive use of the internet & social media in relation to suicide prevention & selfharm reduction",
      type: "Child",
    },
    {
      id: "PLSPA3.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote use of, and compliance with, media guidelines on the reporting of suicide; review & update guidelines as necessary",
      type: "Child",
    },
    {
      id: "PLSPA3.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Monitor media reporting and challenge inappropriate reporting",
      type: "Child",
    },
    {
      id: "PLSPA3.3",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Promote best practice guidelines on memorials/ public gatherings/ social media postings",
      type: "Child",
    },
    {
      id: "PLSPA3.4",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Ensure that Northern Ireland is part of the UK-wide arrangements to promote & encourage sensitive reporting of suicide online and in social media, and for making the internet safer for those who are vulnerable to suicide",
      type: "Child",
    },
    {
      id: "PLSPA1.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Support the Ministerial Co-ordination Group on Suicide Prevention to link suicide and self-harm risk prevention to strategic activity across Government",
      type: "Child",
    },
    {
      id: "PLSPA1.2",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Work with the All Party Group on Suicide Prevention to build further societal commitment to reduce suicide and selfharm",
      type: "Child",
    },
    {
      id: "PLSPA10.1",
      display: "",
      parentGroup: "Protect Life 2 - Suicide Prevention Strategy",
      group: "Protect Life 2 - Suicide Prevention Strategy Actions",
      description:
        "Identify priorities for local research into suicide, self-harm & their prevention including data linkage; promote, encourage and commission local research",
      type: "Child",
    },
  ],
  links: [],
};
//
//Other stuff
//

var websites = [
  "https://www.un.org/sustainabledevelopment/sustainable-development-goals/",
  "https://www.northernireland.gov.uk/consultations/draft-programme-government-framework-2016-21-and-questionnaire",
  "https://whc.unesco.org/en/culture2030indicators/",
  //to be continued
];

//Array for all the colors that will be used by each parentGroup
//*: colors need to be assigned to their colour and not change
//TODO write function for above
var colours = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];
