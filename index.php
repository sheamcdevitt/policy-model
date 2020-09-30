<!DOCTYPE html>

<html>


<head>


    <title>USI Policy Tool</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,  user-scalable=no" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="//d3js.org/d3.v4.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>
    <script src="https://d3js.org/d3-force.v1.min.js"></script>
    <script src="js/underscore-min.js"></script>
    <script src="js/d3-save-svg.min.js"></script>
    <script src="js/saveSvgAsPng.js"></script>
    <script src="https://unpkg.com/d3-force-attract@latest"></script>
    <script src="https://unpkg.com/d3-force-cluster@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
    <script src="js/d3-context-menu.js"></script>
    <!-- <!-- !Used for tabs but interferes with searchbox format 
      TODO: Niall can you have a look to see how this might be fixed 
       <script src="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js"></script>-->
    <script src='Table.js'></script>
    <script src='Model.js'></script>

    <script src='jsonArrays.js'></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- !Used for tabs but interferes with searchbox format 
      TODO: Niall can you have a look to see how this might be fixed 
      <link href="https://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css" rel="stylesheet">-->
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/jquery-stack-menu.css" />
    <link rel="stylesheet" href="css/d3-context-menu.css" />
    <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKR3RYTibZwlPfntvwKz44Yy1oxQ1m9f0&callback=initAutocomplete&libraries=places&v=weekly"
        defer></script>
    <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oswald|Oswald+Light|Saira+Extra+Light|Saira+Semi+Bolf"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin="" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.0/moment.min.js"
        integrity="sha512-Izh34nqeeR7/nwthfeE0SI3c8uhFSnqxV0sI9TvTcXiFJkMd6fB644O64BRq2P/LA/+7eRvCw4GmLsXksyTHBg=="
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css">
    <script src="js/jquery-stack-menu.js"></script>
    <script src="//unpkg.com/force-graph"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>
    
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>
    <canvas width="4000" height="5000" style="display: none"></canvas>



</head>

<body>

    <nav class="navbar navbar-expand-md sticky-top navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <h4 class="machina-font">USI Policy Tool</h4>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">

            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#create">Create Policy Map</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">About</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="jumbotron" style="margin-bottom: 0;">
        <div class="container">
            <p class="h5">Welcome to</p>
            <h1 class="display-3 mb-3">USI Policy Tool</h1>
            <p class="h5">The aim of the USI Policy Tool is to provide instant and coherent access to multiple outcomes
                and
                indicators from international to local level policy, to understand how they might link and influence
                projects.
                Simply insert keywords or themes that apply to your project and select the relevant objectives you wish
                to align
                to or meet.</p>
            <!-- <p><a class="btn btn-primary btn-lg" href="https://getbootstrap.com/docs/4.5/examples/jumbotron/#" role="button">Get Started</a></p> -->
            <hr>
            <br>
            <ul class="list-unstyled">
                <li class="media">
                    <i class="fas fa-sitemap fa-fw fa-3x mr-4"></i>
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">Mapping</h5>
                        One of the key issues surrounding government departments and city councils is the ability for
                        civil servants
                        to see a co-ordinated approach across strategies and live projects to promote learning and
                        cross-departmental alignment for better collaboration. This tool provides a visual mind map to
                        support that
                        challenge.
                    </div>
                </li>
                <li class="media my-4">
                    <i class="fas fa-database fa-fw fa-3x mr-4"></i>
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">User Input</h5>
                        As well as mapping to other projects and strategies, the user can input their project onto the
                        database for
                        future use; meaning other departments and teams that are using the tool can understand how their
                        project
                        might strategically align to yours.
                    </div>
                </li>
                <li class="media">
                    <i class="fas fa-table fa-fw fa-3x mr-4"></i>
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">Implementation Table</h5>
                        Beyond the visual map the user can also use the implementation table to identify KPIs alongside
                        the matched
                        outcomes and indicators. The implementation table learns and as such the user has the ability to
                        see how
                        other users are applying measurables for shared learning.
                    </div>
                </li>
                <li class="media mt-4">
                    <i class="fas fa-calendar-check fa-fw fa-3x mr-4"></i>
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">Development Plans</h5>
                        The next stage of the tools' development is for users to input if the KPIs were achieved post
                        completion,
                        building an evidence base into the tool for best practice and rational for future project
                        justification.
                        This tool provides a secure space in which the civil service no longer has to create core
                        components of
                        business cases and strategies in silo, it learns, it builds and it is instant, providing a
                        visual mind map
                        of all polices and strategic projects within the public sector.
                    </div>
                </li>
            </ul>
            <h4 class="mt-5 mb-1">As well as seeing what other departments are prioritising to promote
                cross-departmental
                collaboration it offers an opportunity to standardise and create living core components required for
                NIGEIE
                compliant documents, namely:</h4>
            <ul class="list-group mt-4">
                <li class="list-group-item"><i class="fas fa-check-circle fa-lg mr-4"></i>Intuitive Strategic fit, (need
                    and
                    demand) mapping</li>
                <li class="list-group-item"><i class="fas fa-check-circle fa-lg mr-4"></i>Live SMART objectives</li>
                <li class="list-group-item"><i class="fas fa-check-circle fa-lg mr-4"></i>A better understanding of
                    potential
                    for displacement (see all projects across departments)</li>
                <li class="list-group-item"><i class="fas fa-check-circle fa-lg mr-4"></i>Stronger chance of
                    cross-departmental
                    collaboration, (see what others are trying to achieve through the database)</li>
                <li class="list-group-item"><i class="fas fa-check-circle fa-lg mr-4"></i>Provides an intuitive post
                    project
                    monitoring and evaluation database for better practise and rational of KPIs. </li>
            </ul>

        </div>
    </div>

    <!--BUTTONS: should loop and create these but will do for now-->
    <!--Show Links Buttons-->
    <!--
  <button id="UNSDG" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show UNSDG links</button>
  <button id="A Bolder Vision for Belfast" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show A Bolder Vision for Belfast
    links</button>
  <button id="A City Imagining" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show A City Imagining links</button>
  <button id="Belfast Agenda" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Belfast Agenda links</button>
  <button id="Belfast Agenda Immediate Priorities" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Belfast Agenda Immediate Priorities
    links</button>
  <button id="Belfast City Council Local Development Plan" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Belfast City Council Local Development
    Plan links</button>
  <button id="Belfast City Council Open Spaces Strategy" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Belfast City Council Open Spaces
    Strategy links</button>
  <button id="Belfast City Council Public Realm" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Show only Belfast City Council Public
    Realm links</button>
  <button id="Belfast Green and Blue Infrastructure Plan" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Belfast Green and Blue Infrastructure
    Plan links</button>
  <button id="Culture 2030 Indicators" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Culture 2030 Indicators links</button>
  <button id="Derry City & Strabane District’s Inclusive Strategic Growth Plan" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Derry City & Strabane District’s
    Inclusive Strategic Growth Plan links</button>
  <button id="Programme for Government" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Programme for Government links</button>
  <button id="Protect Life 2 - Suicide Prevention Strategy" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Protect Life 2 - Suicide Prevention
    Strategy links</button>
  <button id="Resilience" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Resilience links</button>
  <button id="Resilience - Shocks and Stresses" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Resilience - Shocks and Stresses
    links</button>
  <button id="WHO 5 Ways To Wellbeing" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show WHO 5 Ways To Wellbeing links</button>
  <button id="WHO Arts Components" class="btn-links">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show WHO Arts Components links</button>
  -->
    <!--Show only Buttons
  <button id="Foyle Groups" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show Foyle Links</button>-->
    <button id="FoyleAware" class="btn btn-primary">
        <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Westlink</button>


    <!-- <button id="Education" class="btn btn-primary">
            <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Education</button>-->

    <!--
  <button id="SHOWONLYUNSDG" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only UN Sustainable Development
    Goals</button>
  <button id="SHOWONLYA Bolder Vision for Belfast" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only A Bolder Vision for
    Belfast</button>
  <button id="SHOWONLYA City Imagining" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only A City Imagining</button>
  <button id="SHOWONLYBelfast Agenda" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Belfast Agenda</button>
  <button id="SHOWONLYBelfast Agenda Immediate Priorities" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Belfast Agenda Immediate
    Priorities</button>
  <button id="SHOWONLYBelfast City Council Local Development Plan" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Belfast City Council Local
    Development Plan</button>
  <button id="SHOWONLYBelfast City Council Open Spaces Strategy" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Belfast City Council Open Spaces
    Strategy</button>
  <button id="SHOWONLYBelfast City Council Public Realm" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Belfast City Council Public
    Realm</button>
  <button id="SHOWONLYBelfast Green and Blue Infrastructure Plan" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Belfast Green and Blue
    Infrastructure Plan</button>
  <button id="SHOWONLYCulture 2030 Indicators" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Culture 2030 Indicators</button>
  <button id="SHOWONLYDerry City & Strabane District’s Inclusive Strategic Growth Plan" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Derry City & Strabane District’s
    Inclusive Strategic Growth Plan</button>
  <button id="SHOWONLYProgramme for Government" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Programme for Government</button>
  <button id="SHOWONLYProtect Life 2 - Suicide Prevention Strategy" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Protect Life 2 - Suicide
    Prevention Strategy</button>
  <button id="SHOWONLY Resilience" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Resilience</button>
  <button id="SHOWONLYResilience - Shocks and Stresses" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only Resilience - Shocks and
    Stresses</button>
  <button id="SHOWONLYWHO 5 Ways To Wellbeing" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only WHO 5 Ways To Wellbeing</button>
  <button id="SHOWONLYWHO Arts Components" class="btn btn-primary">
    <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Show only WHO Arts Components</button>
  -->
    <!--BUTTONS: should loop and create these but will do for now-->



    <section class="jumbotron search-jumbo" id="create" style="margin-top: 0;">
        <div class="container">
            <div class="text-center">
                <h1 class="manrope">Explore connected policies in a visual map<br><br></h1>
                <h3>To start, enter a policy, goal or indicator</h3>
                <h3 style="font-size: 18px;">Or click on suggested searches<br><br><br> <small>Learn More</small></h3>

                <i class="fas fa-chevron-circle-up rotate fa-2x"></i>
                <hr>
                <br>
            </div>
            <div class="row">
                <div class="col-md-7">

                    <div class="boxSearch">
                        <div class="input-group input-group-lg">
                            <input type="text" name="search" id="search" placeholder="Search Policies"
                                class="form-control" />
                            <span class="input-group-append">
                                <a href="#create-model-btn" id="CreateModel" class="btn btn-primary">Create Model</a>
                            </span>
                        </div>
                    </div>
                    <ul class="pb-5" id="result"></ul>
                    <br />
                    <!-- <label for="exampleFormControlSelect2">Select/Unselect Strategies to search</label>
          <select multiple class="form-control select-checkbox" id="selectStrategy" style="height: 185px">
          </select>
          <br>
          <button type="button" id="applySelections" class="btn btn-primary">Apply Selections</button> -->
                </div>

                <div class="col-md-5">

                    <div class="menu pt-6">
                        <nav id="stack-menu">
                            <ul>
                                <li><a>Suggested Searches</a>
                                    <ul>
                                        <li><a>Poverty</a>
                                            <ul>
                                                <li><a class="suggest-click">Coverage</a></li>
                                                <li><a class="suggest-click">Vulnerable</a></li>
                                                <li><a class="suggest-click">Resources</a></li>
                                                <li><a class="suggest-click">Basic Services</a></li>
                                                <li><a class="suggest-click">Ownership</a></li>
                                                <li><a class="suggest-click">Control over land</a></li>
                                                <li><a class="suggest-click">Property</a></li>
                                                <li><a class="suggest-click">Inheritance</a></li>
                                                <li><a class="suggest-click">Natural Resources</a></li>
                                                <li><a class="suggest-click">Technology</a></li>
                                                <li><a class="suggest-click">Financial Services</a></li>
                                                <li><a class="suggest-click">Finance</a></li>
                                                <li><a class="suggest-click">Microfinance</a></li>
                                                <li><a class="suggest-click">Economic</a></li>
                                                <li><a class="suggest-click">Social</a></li>
                                                <li><a class="suggest-click">Environmental</a></li>
                                                <li><a class="suggest-click">Co-operation</a></li>
                                                <li><a class="suggest-click">Mobilization of resources</a></li>
                                                <li><a class="suggest-click">Investment</a></li>
                                                <li><a class="suggest-click">Eradication</a></li>
                                            </ul>
                                        </li>

                                        <li><a>Food</a>
                                            <ul>
                                                <li><a class="suggest-click">Hunger</a></li>
                                                <li><a class="suggest-click">Nutrition</a></li>
                                                <li><a class="suggest-click">Sufficient</a></li>
                                                <li><a class="suggest-click">Malnutrition</a></li>
                                                <li><a class="suggest-click">Agriculture</a></li>
                                                <li><a class="suggest-click">Producer</a></li>
                                                <li><a class="suggest-click">Farmers</a></li>
                                                <li><a class="suggest-click">Pastoralist</a></li>
                                                <li><a class="suggest-click">Fisher</a></li>
                                                <li><a class="suggest-click">Land</a></li>
                                                <li><a class="suggest-click">Proportion</a></li>
                                                <li><a class="suggest-click">Drought</a></li>
                                                <li><a class="suggest-click">Flood</a></li>
                                                <li><a class="suggest-click">Disaster</a></li>
                                                <li><a class="suggest-click">Soil</a></li>
                                                <li><a class="suggest-click">Seed</a></li>
                                                <li><a class="suggest-click">Cultivate</a></li>
                                                <li><a class="suggest-click">Domestic</a></li>
                                                <li><a class="suggest-click">Rural</a></li>
                                                <li><a class="suggest-click">Export</a></li>
                                                <li><a class="suggest-click">Import</a></li>
                                                <li><a class="suggest-click">Doha Development Round</a></li>
                                                <li><a class="suggest-click">Livestock</a></li>
                                                <li><a class="suggest-click">Reserve</a></li>
                                                <li><a class="suggest-click">Volatility</a></li>
                                            </ul>
                                        </li>

                                        <li><a>Health</a>
                                            <ul>
                                                <li><a class="suggest-click">Live</a></li>
                                                <li><a class="suggest-click">Life</a></li>
                                                <li><a class="suggest-click">Well-being</a></li>
                                                <li><a class="suggest-click">Mortality</a></li>
                                                <li><a class="suggest-click">Death</a></li>
                                                <li><a class="suggest-click">Neonatal</a></li>
                                                <li><a class="suggest-click">Birth</a></li>
                                                <li><a class="suggest-click">Epidemic</a></li>
                                                <li><a class="suggest-click">AIDS</a></li>
                                                <li><a class="suggest-click">Tuberculosis</a></li>
                                                <li><a class="suggest-click">Malaria</a></li>
                                                <li><a class="suggest-click">Disease</a></li>
                                                <li><a class="suggest-click">Hepatitis</a></li>
                                                <li><a class="suggest-click">Water-borne</a></li>
                                                <li><a class="suggest-click">Infection</a></li>
                                                <li><a class="suggest-click">Mental Health</a></li>
                                                <li><a class="suggest-click">Prevention</a></li>
                                                <li><a class="suggest-click">Substance</a></li>
                                                <li><a class="suggest-click">Drug</a></li>
                                                <li><a class="suggest-click">Medicine</a></li>
                                                <li><a class="suggest-click">Treatment</a></li>
                                                <li><a class="suggest-click">Narcotic</a></li>
                                                <li><a class="suggest-click">Alcohol</a></li>
                                                <li><a class="suggest-click">Accidents</a></li>
                                                <li><a class="suggest-click">Reproduce</a></li>
                                                <li><a class="suggest-click">Family planning</a></li>
                                                <li><a class="suggest-click">Care</a></li>
                                                <li><a class="suggest-click">Vaccines</a></li>
                                                <li><a class="suggest-click">Chemicals</a></li>
                                                <li><a class="suggest-click">Air</a></li>
                                                <li><a class="suggest-click">Water</a></li>
                                                <li><a class="suggest-click">Soil</a></li>
                                                <li><a class="suggest-click">Pollution</a></li>
                                                <li><a class="suggest-click">Contamination</a></li>
                                                <li><a class="suggest-click">Tobacco</a></li>
                                                <li><a class="suggest-click">Training</a></li>
                                                <li><a class="suggest-click">Disability</a></li>
                                            </ul>
                                        </li>

                                        <li><a>Education</a>
                                            <ul>
                                                <li><a class="suggest-click">Primary</a></li>
                                                <li><a class="suggest-click">Secondary</a></li>
                                                <li><a class="suggest-click">Tertiary</a></li>
                                                <li><a class="suggest-click">Vocational</a></li>
                                                <li><a class="suggest-click">Skill</a></li>
                                                <li><a class="suggest-click">Technical</a></li>
                                                <li><a class="suggest-click">Quality</a></li>
                                                <li><a class="suggest-click">Entrepreneurship</a></li>
                                                <li><a class="suggest-click">Employment</a></li>
                                                <li><a class="suggest-click">Youth</a></li>
                                                <li><a class="suggest-click">Literacy</a></li>
                                                <li><a class="suggest-click">Numeracy</a></li>
                                                <li><a class="suggest-click">Learn</a></li>
                                                <li><a class="suggest-click">Knowledge</a></li>
                                                <li><a class="suggest-click">Scholarship</a></li>
                                                <li><a class="suggest-click">Train</a></li>
                                                <li><a class="suggest-click">Science</a></li>
                                                <li><a class="suggest-click">Teach</a></li>
                                            </ul>
                                        </li>

                                        <li><a>Equality</a>
                                            <ul>
                                                <li><a class="suggest-click">Inequality</a></li>
                                                <li><a class="suggest-click">Discriminate</a></li>
                                                <li><a class="suggest-click">Violence</a></li>
                                                <li><a class="suggest-click">Trafficking</a></li>
                                                <li><a class="suggest-click">Exploitation</a></li>
                                                <li><a class="suggest-click">Child Marriage</a></li>
                                                <li><a class="suggest-click">Unpaid</a></li>
                                                <li><a class="suggest-click">Domestic</a></li>
                                                <li><a class="suggest-click">Domestic</a></li>
                                                <li><a class="suggest-click">Protection</a></li>
                                                <li><a class="suggest-click">Household</a></li>
                                                <li><a class="suggest-click">Family</a></li>
                                                <li><a class="suggest-click">Participation</a></li>
                                                <li><a class="suggest-click">Leadership</a></li>
                                                <li><a class="suggest-click">Decision</a></li>
                                                <li><a class="suggest-click">Empowerment</a></li>
                                            </ul>
                                        </li>


                                        <li><a>Sanitaion</a>
                                            <ul>
                                                <li><a class="suggest-click">Water</a> </li>
                                                <li><a class="suggest-click">Drink</a></li>
                                                <li><a class="suggest-click">Hygiene</a></li>
                                                <li><a class="suggest-click">Defectation</a></li>
                                                <li><a class="suggest-click">Pollution</a></li>
                                                <li><a class="suggest-click">Dumping</a></li>
                                                <li><a class="suggest-click">Hazardous</a></li>
                                                <li><a class="suggest-click">Chemicals</a></li>
                                                <li><a class="suggest-click">Materials</a></li>
                                                <li><a class="suggest-click">Waste</a></li>
                                                <li><a class="suggest-click">Recycle</a></li>
                                                <li><a class="suggest-click">Ecosystem</a></li>
                                                <li><a class="suggest-click">Harvest</a></li>
                                                <li><a class="suggest-click">Desalination</a></li>
                                                <li><a class="suggest-click">Reuse</a></li>
                                            </ul>
                                        </li>


                                        <li><a>Energy</a>
                                            <ul>
                                                <li><a class="suggest-click">Affordable</a></li>
                                                <li><a class="suggest-click">Reliable</a></li>
                                                <li><a class="suggest-click">Renewable</a></li>
                                                <li><a class="suggest-click">Efficiency</a></li>

                                            </ul>
                                        </li>


                                        <li><a>Economy</a>
                                            <ul>
                                                <li><a class="suggest-click">Industry</a></li>
                                                <li><a class="suggest-click">Innovation</a></li>
                                                <li><a class="suggest-click">Infrastructure</a></li>
                                                <li><a class="suggest-click">Growth</a></li>
                                                <li><a class="suggest-click">Employment</a></li>
                                                <li><a class="suggest-click">Capita</a></li>
                                                <li><a class="suggest-click">Gross</a></li>
                                                <li><a class="suggest-click">Diversification</a></li>
                                                <li><a class="suggest-click">Upgrade</a></li>
                                                <li><a class="suggest-click">Labour</a></li>
                                                <li><a class="suggest-click">Technology</a></li>
                                                <li><a class="suggest-click">Finance</a></li>
                                                <li><a class="suggest-click">Progress</a></li>
                                                <li><a class="suggest-click">Resource</a></li>
                                                <li><a class="suggest-click">Slavery</a></li>
                                                <li><a class="suggest-click">Recruit</a></li>
                                                <li><a class="suggest-click">Migrant</a></li>
                                                <li><a class="suggest-click">Institution</a></li>
                                                <li><a class="suggest-click">Bank</a></li>
                                                <li><a class="suggest-click">Insurance</a></li>
                                                <li><a class="suggest-click">Commodity</a></li>
                                                <li><a class="suggest-click">Consumption</a></li>
                                                <li><a class="suggest-click">Production</a></li>
                                            </ul>
                                        </li>


                                        <li><a>Settlement</a>
                                            <ul>
                                                <li><a class="suggest-click">Housing</a></li>
                                                <li><a class="suggest-click">Services</a></li>
                                                <li><a class="suggest-click">Slum</a></li>
                                                <li><a class="suggest-click">Transport</a></li>
                                                <li><a class="suggest-click">Urban</a></li>
                                                <li><a class="suggest-click">Capacity</a></li>
                                                <li><a class="suggest-click">Planning</a></li>
                                                <li><a class="suggest-click">Management</a></li>
                                                <li><a class="suggest-click">Heritage</a></li>
                                                <li><a class="suggest-click">Domestic</a></li>
                                                <li><a class="suggest-click">Protection</a></li>
                                                <li><a class="suggest-click">Security</a></li>
                                                <li><a class="suggest-click">Air</a></li>
                                                <li><a class="suggest-click">Waste</a></li>
                                                <li><a class="suggest-click">Green</a></li>
                                                <li><a class="suggest-click">Public</a></li>
                                                <li><a class="suggest-click">Spaces</a></li>
                                                <li><a class="suggest-click">Cities</a></li>
                                                <li><a class="suggest-click">Towns</a></li>
                                                <li><a class="suggest-click">Place</a></li>
                                                <li><a class="suggest-click">Building</a></li>
                                                <li><a class="suggest-click">Local</a></li>
                                            </ul>
                                        </li>


                                        <li><a>Consumption & Production</a>
                                            <ul>
                                                <li><a class="suggest-click">Countries</a></li>
                                                <li><a class="suggest-click">Resources</a></li>
                                                <li><a class="suggest-click">Materials</a></li>
                                                <li><a class="suggest-click">Global</a></li>
                                                <li><a class="suggest-click">Supply</a></li>
                                                <li><a class="suggest-click">Harvest</a></li>
                                                <li><a class="suggest-click">Generation</a></li>
                                                <li><a class="suggest-click">Reduction</a></li>
                                                <li><a class="suggest-click">Recycling</a></li>
                                                <li><a class="suggest-click">Reuse</a></li>
                                                <li><a class="suggest-click">Company</a></li>
                                                <li><a class="suggest-click">Practice</a></li>
                                                <li><a class="suggest-click">Tool</a></li>
                                                <li><a class="suggest-click">Fossil-fuel</a></li>
                                                <li><a class="suggest-click">Subsidiary</a></li>
                                                <li><a class="suggest-click">Taxation </a></li>
                                                <li><a class="suggest-click">Impact</a></li>
                                            </ul>
                                        </li>


                                        <li><a>Climate</a>
                                            <ul>
                                                <li><a class="suggest-click">Hazard</a></li>
                                                <li><a class="suggest-click">Natural Disaster</a></li>
                                                <li><a class="suggest-click">Measure</a></li>
                                                <li><a class="suggest-click">Awareness</a></li>
                                                <li><a class="suggest-click">Mitigation</a></li>
                                                <li><a class="suggest-click">Early Warning</a></li>
                                                <li><a class="suggest-click">Green</a></li>
                                                <li><a class="suggest-click">Ocean</a></li>
                                                <li><a class="suggest-click">Sea</a></li>
                                                <li><a class="suggest-click">Marine</a></li>
                                                <li><a class="suggest-click">Pollution</a></li>
                                                <li><a class="suggest-click">Acidification</a></li>
                                                <li><a class="suggest-click">Fish</a></li>
                                                <li><a class="suggest-click">Yield</a></li>
                                                <li><a class="suggest-click">Biological</a></li>
                                                <li><a class="suggest-click">Coastal</a></li>
                                                <li><a class="suggest-click">Regulate</a></li>
                                                <li><a class="suggest-click">Research</a></li>
                                                <li><a class="suggest-click">Terrestrial</a></li>
                                                <li><a class="suggest-click">Ecosystem</a></li>
                                                <li><a class="suggest-click">Forests</a></li>
                                                <li><a class="suggest-click">Desertification</a></li>
                                                <li><a class="suggest-click">Wetlands</a></li>
                                                <li><a class="suggest-click">Mountains</a></li>
                                                <li><a class="suggest-click">Drylands</a></li>
                                                <li><a class="suggest-click">Biodiversity</a></li>
                                                <li><a class="suggest-click">Drought</a></li>
                                                <li><a class="suggest-click">Flood</a></li>
                                                <li><a class="suggest-click">Land</a></li>
                                                <li><a class="suggest-click">Soil</a></li>
                                                <li><a class="suggest-click">Habitat</a></li>
                                                <li><a class="suggest-click">Species</a></li>
                                                <li><a class="suggest-click">Genetic</a></li>
                                                <li><a class="suggest-click">Poaching</a></li>
                                                <li><a class="suggest-click">Wildlife</a></li>
                                                <li><a class="suggest-click">Flora</a></li>
                                                <li><a class="suggest-click">Fauna</a></li>
                                                <li><a class="suggest-click">Reforestation</a></li>
                                                <li><a class="suggest-click">Deforestation</a></li>
                                                <li><a class="suggest-click">Conserve</a></li>
                                                <li><a class="suggest-click">Conservation</a></li>
                                                <li><a class="suggest-click">Protect</a></li>
                                                <li><a class="suggest-click">Livelihood</a></li>
                                            </ul>
                                        </li>


                                        <li><a>Justice</a>
                                            <ul>
                                                <li><a class="suggest-click">Peace</a></li>
                                                <li><a class="suggest-click">Sovereignty</a></li>
                                                <li><a class="suggest-click">Society</a></li>
                                                <li><a class="suggest-click">Violence</a></li>
                                                <li><a class="suggest-click">Abuse</a></li>
                                                <li><a class="suggest-click">Exploitation</a></li>
                                                <li><a class="suggest-click">Trafficking</a></li>
                                                <li><a class="suggest-click">Torture</a></li>
                                                <li><a class="suggest-click">Equal</a></li>
                                                <li><a class="suggest-click">Arms</a></li>
                                                <li><a class="suggest-click">Illicit</a></li>
                                                <li><a class="suggest-click">Stolen</a></li>
                                                <li><a class="suggest-click">Crime</a></li>
                                                <li><a class="suggest-click">Corruption</a></li>
                                                <li><a class="suggest-click">Bribery</a></li>
                                                <li><a class="suggest-click">Decision</a></li>
                                                <li><a class="suggest-click">Governance</a></li>
                                                <li><a class="suggest-click">Law</a></li>
                                            </ul>
                                        </li>


                                        <li><a>Partnership</a>
                                            <ul>
                                                <li><a class="suggest-click">Tax</a></li>
                                                <li><a class="suggest-click">Revenue</a></li>
                                                <li><a class="suggest-click">Development</a></li>
                                                <li><a class="suggest-click">Commitment</a></li>
                                                <li><a class="suggest-click">Income</a></li>
                                                <li><a class="suggest-click">Official Development Assistance</a></li>
                                                <li><a class="suggest-click">Gross National Income</a></li>
                                                <li><a class="suggest-click">Debt</a></li>
                                                <li><a class="suggest-click">Investment</a></li>
                                                <li><a class="suggest-click">Technology</a></li>
                                                <li><a class="suggest-click">Capacity-building</a></li>
                                                <li><a class="suggest-click">Trade</a></li>
                                                <li><a class="suggest-click">Bank</a></li>
                                                <li><a class="suggest-click">Market</a></li>
                                                <li><a class="suggest-click">Exports</a></li>
                                                <li><a class="suggest-click">Macroeconomic</a></li>
                                                <li><a class="suggest-click">Stakeholder</a></li>
                                                <li><a class="suggest-click">Data</a></li>
                                                <li><a class="suggest-click">Monitoring</a></li>
                                                <li><a class="suggest-click">Accountability</a></li>
                                            </ul>
                                        </li>



                                    </ul>
                        </nav>
                    </div>


                </div>


                <!-- Added notification -  TODO -->

                <!-- <div class="col-md-3 policy-list-padding">
          <ul id="add" class="list-group">
          </ul>
        </div> -->
            </div>
        </div>
        </div>
    </section>

    <!-- Tab code: can be used to Tab between Model, Table, and Model Descriptions maybe--->

    <div class="container tab-section" id="model">
        <h4 id="create-model-btn">Model Output</h4>
        <ul class="nav nav-tabs">
            <li class="nav-item active"><a class="nav-link active atab" href="#a_tab" data-toggle="tab">Model</a></li>
            <li class="nav-item"><a class="nav-link btab" href="#b_tab" data-toggle="tab">Description</a></li>
            <li class="nav-item"><a class="nav-link ctab" href="#c_tab" data-toggle="tab">Implementation Table</a></li>
        </ul>
        <div class="tab-content text-center mt-5">
            <div class="tab-pane active" id="a_tab">
                <h1>Your Policy Model</h1>
                <acontent></acontent>
            </div>
            <div class="tab-pane" id="b_tab">
                <h1>Model Description</h1>
                <bcontent></bcontent>
            </div>
            <div class="tab-pane" id="c_tab">
                <h1>Implementation Table</h1>
                <div class="table-responsive mt-5">
                    <table class="table w-100 table-bordered table-striped" id="Table">
                        <thead class="table-info">
                            <tr>
                                <th onclick="sortColumn('age')">Age</th>
                                <th>Policy Indicator</th>
                                <th>Action</th>
                                <th>Measurables</th>
                                <th>Key Partners</th>
                            </tr>
                        </thead>

                        <tbody id="tableData"></tbody>
                    </table>
                </div>
            </div>
            <!-- <div class="tab-pane" id="modelMap" style="width: 600px; height: 400px; padding-left: 50px;">
         <h1>Map</h1>
        <ccontent></ccontent></div>-->

        </div>



        <div class="svg-bg">
            <svg id="center-svg" class="center-svg" viewBox="0 0 2000 2500"></svg>
            <hr>
            <button class="btn btn-info" id="download-png" <span aria-hidden="true"></span>Download
                Image</button>
            <button class="btn btn-info" id="download-svg" <span aria-hidden="true"></span>Download
                Vector</button>

        </div>

    </div>




    <section class="jumbotron" style="margin-top: 0; margin-bottom: 0;">
        <div class="container">
            <div class=" row">
                <div class="col-md-12">
                    <h1 style="text-align: left;">Enter Project Info</h1>
                    <h3 style="font-size: 18px;">To save your project, enter the project's information below (ensure you
                        are happy with the above created model before proceeding)<br>
                        <br>

                        <?php include('add.php');?>
                        <!-- <div class="boxInfo">
                                <div class="input-group input-group-lg">
                                    <input type="text" name="projectName" id="projectName" placeholder="Project Name"
                                        class="form-control" value="<?php echo htmlspecialchars($projectName) ?>" />
                                    <div class="red-text"><?php echo $errors['projectName']; ?></div>
                                </div>
                            </div>
                            <div class="boxInfo">
                                <div class="input-group input-group-lg">
                                    <input type="text" name="projectValue" id="projectValue"
                                        placeholder="Project Value (£)" class="form-control"
                                        value="<?php echo htmlspecialchars($projectValue) ?>" />
                                </div>
                            </div>
                            <div class="boxInfo">
                                <div class="input-group input-group-lg">
                                    <input type="text" name="projectDeliveryDate" id="projectDeliveryDate"
                                        placeholder="Delivery Date" class="form-control"
                                        value="<?php echo htmlspecialchars($projectDeliveryDate) ?>" />
                                </div>
                            </div>
                            <div class="boxInfo">
                                <div class="input-group input-group-lg">
                                    <input type="text" name="projectLocation" id="projectLocation"
                                        placeholder="Location" class="form-control" />
                                </div>
                            </div>
                            <div class="boxInfo">
                                <div class="input-group input-group-lg">
                                    <input type="text" name="projectDeliveryPartners" id="projectDeliveryPartners"
                                        placeholder="Delivery Partners" class="form-control" />
                                </div>
                            </div>
                            <br /> -->
                </div>

    </section>

    </form>
    <!-- 
    <div class="container tab-section">
        <h4>Model Output</h4>
        <ul id="create-model-btn" class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active atab" href="#a_tab"data-toggle="tab" role="tab"
                    aria-controls="home" aria-selected="true">Model</a>
            </li>
            <li class="nav-item">
                <a class="nav-link btab" href="#b_tab"  data-toggle="tab" role="tab"
                    aria-controls="profile" aria-selected="false">Description</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#c_tab" data-toggle="tab" role="tab" aria-controls="contact"
                    aria-selected="false">Implementation Table</a>
            </li>
        </ul>
        <div class="tab-content pt-5" id="myTabContent">
            <div class="tab-pane fade show active" id="a_tab" role="tabpanel" aria-labelledby="home-tab">
                <h1 class="text-center">Your Policy Model</h1>

                <div class="svg-bg" id="model-area">
                    <svg id="center-svg" class="center-svg" viewBox="0 0 2000 2500"></svg>
                    <hr>
                    <button class="btn btn-info" id="download-png" <span aria-hidden="true"></span>Download
                        Image</button>
                    <button class="btn btn-info" id="download-svg" <span aria-hidden="true"></span>Download
                        Vector</button>
                    <button class="btn btn-success" name="save-project" id="save-project" <span
                        aria-hidden="true"></span>Save Project</button>
                </div>


            </div>
            <div class="tab-pane fade" id="b_tab" role="tabpanel" aria-labelledby="profile-tab">
            <h1 class="text-center">Description</h1>
            <bcontent></bcontent>
            </div>
            <div class="tab-pane fade" id="c_tab" role="tabpanel" aria-labelledby="contact-tab">
                <h1 class="text-center">Implementation Table</h1>
                <div class="table-responsive mt-5">
                    <table class="table w-100 table-bordered table-striped" id="Table">
                        <thead class="table-info">
                            <tr>
                                <th onclick="sortColumn('age')">Age</th>
                                <th>Policy Indicator</th>
                                <th>Action</th>
                                <th>Measurables</th>
                                <th>Key Partners</th>
                            </tr>
                        </thead>

                        <tbody id="tableData"></tbody>
                    </table>
                </div>
            </div>
        </div>



    </div>  -->






    <!--<button id="UpdateModel" class="btn btn-primary">
  <span class="glyphicon glyphicon-pencil pr-4" aria-hidden="true"></span>Update Model</button>-->


    <!--TABLE CODE-->
    <!-- <div class="container pb-5">
        <div class="row justify-content-center">
            <div class="col-12">

                <div class="table-responsive mt-5">
                    <table class="table w-100 table-bordered table-striped" id="Table">
                        <thead class="table-info">
                            <tr>
                                <!--<th onclick="sortColumn('age')">Age</th>-->
    <!-- <th>Policy Indicator</th>
                                <th>Action</th>
                                <th>Measurables</th>
                                <th>Key Partners</th>
                            </tr>
                        </thead>

                        <tbody id="tableData"></tbody>
                    </table>
                </div>
                <button class="btn btn-primary" id="CreateTable" <span aria-hidden="true"></span>Create Table</button> -->
    <!--TABLE CODE-->
    <!-- </div>
        </div>
    </div> -->

    <!-- <div class="map" id="modelMap" style="width: 600px; height: 400px; padding-top: 200px;"></div> -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <script src='Map.js'></script>




</body>



<style>
/* table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #cccccc;
    padding: 8px;
  }

  th {
    background-color: white;
    font-weight: bold;
    text-transform: uppercase;
  }

  tr:nth-child(even) {
    background-color: lightblue;
  }

  tr:nth-child(odd) {
    background-color: rgb(176, 230, 248);
  }
  tr:hover {
    background-color: black;
    color: white;
  }

  th:hover {
    background-color: black;
    color: white;
  } */
</style>




<script>
var picker = new Pikaday({

    field: document.getElementById('datepicker'),
    onSelect: function() {
        console.log(this.getMoment().format('YYYY MM DD'));
    }

});
</script>

<script>
$("#select-partners").select2({
    tags: true
});


$(".rotate").click(function() {
    $(this).toggleClass("down");
})

$("#model-area").click(function() {
    $("#center-svg").focus();
});


$(" .suggest-click").on("click", function(e) {
    $("#search").val(e.target.innerText);
    $('#search').keyup();
});


$(document).ready(function() {
    $('#stack-menu').stackMenu();
});
</script>

</html>
<!-- <div class="model-bg"> -->




<!--TABLE CODE-->


<!-- <script>
  //add suggested search to bar and fire event when changed

  $(" .suggest-click").on("click", function (e) { $("#search").val(e.target.innerText); console.log("Test .val");
      $("#search").change(); }); $(document).ready(function () { $('#stack-menu').stackMenu(); }); </script> </html> -->
<!-- <div class="model-bg"> -->