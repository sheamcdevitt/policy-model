<?php


// include('db_connect.php');
    

//pass last implementation id to be ready by datatables

// $sql = "SELECT `id` from `implementation` ORDER BY `id` DESC LIMIT 1";
// $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));


// if(mysqli_num_rows($result) > 0){
//     while($row = mysqli_fetch_assoc( $result)){
        
//         echo "<p id='id'>";
//         echo  $id = $row['id'];
//         echo "</p>";
       
//     }
//     } else {
//         echo "no id";
//     }



?>
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
    <script src="js/Chart.js"></script>
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
    <link rel="stylesheet" href="css/jquery-stack-menu.css" type="text/css" />
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



    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">
    <script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
    <canvas width="4000" height="5000" style="display: none"></canvas>



    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.22/b-1.6.4/b-html5-1.6.4/sl-1.3.1/datatables.min.css" />


    <script type="text/javascript"
        src="https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.22/b-1.6.4/b-html5-1.6.4/sl-1.3.1/datatables.min.js">
    </script>


    <script type="text/javascript" language="javascript"
        src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" language="javascript"
        src="https://cdn.datatables.net/buttons/1.6.4/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" language="javascript"
        src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.min.js"></script>


    <link rel="stylesheet" type="text/css" href="datatables/Editor-1.9.5/css/editor.dataTables.css">
    <script type="text/javascript" src="Editor-PHP-1.9.5/js/dataTables.editor.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>

    <script src="https://cdn.datatables.net/plug-ins/1.10.21/api/row().show().js"></script>
</head>



<body>



    <nav class="navbar navbar-expand-md  nav-bg">
        <a class="navbar-brand" href="#">
            <h4 class="machina-font light">USI Policy Tool</h4>
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
            <p class="h5 olive">Welcome to</p>
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
                    <i class="fas fa-sitemap fa-fw fa-3x mr-4 icon-color"></i>
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
                    <i class="fas fa-database fa-fw fa-3x mr-4  icon-color"></i>
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
                    <i class="fas fa-table fa-fw fa-3x mr-4  icon-color"></i>
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
                    <i class="fas fa-calendar-check fa-fw fa-3x mr-4  icon-color"></i>
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
                <li class="list-group-item"><i class="fas fa-check-circle fa-lg mr-4 olive"></i>Intuitive Strategic fit,
                    (need
                    and
                    demand) mapping</li>
                <li class="list-group-item"><i class="fas fa-check-circle fa-lg mr-4 olive"></i>Live SMART objectives
                </li>
                <li class="list-group-item"><i class="fas fa-check-circle fa-lg mr-4 olive"></i>A better understanding
                    of
                    potential
                    for displacement (see all projects across departments)</li>
                <li class="list-group-item"><i class="fas fa-check-circle fa-lg mr-4 olive"></i>Stronger chance of
                    cross-departmental
                    collaboration, (see what others are trying to achieve through the database)</li>
                <li class="list-group-item"><i class="fas fa-check-circle fa-lg mr-4 olive"></i>Provides an intuitive
                    post
                    project
                    monitoring and evaluation database for better practise and rational of KPIs. </li>
            </ul>

        </div>
    </div>


    <!-- New sub menu UI -->
    <div class="container">
        <ul id="">
            <!-- result id goes here -->


            <style>
            .container-1 {
                position: relative;
                height: 250px;
            }

            .container-2 {
                max-height: 100%;
                overflow: auto;
            }
            </style>

            <!--Parent item-->

            <div class="">
                <div class="">
                    <li href="#menupos1" class="list-group-item collapsed collapser">Parent Item<span
                            class="float-right">

                            <!--Sub Item-->
                            <div class="collapse  sub-menu-bg" id="menupos1">
                    <li class="list-group-item sub-item">Item</li>


                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                </div>

                <li href="#menupos1" class="list-group-item collapsed collapser">Parent Item<span class="float-right">
                        <i class="fa"></i></span></li>

                <div class="collapse  sub-menu-bg" id="menupos2">
                    <li class="list-group-item sub-item">Item</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                </div>


                <li href="#menupos1" class="list-group-item collapsed collapser">Parent Item<span class="float-right">
                        <i class="fa"></i></span></li>

                <div class="collapse sub-menu-bg" id="menupos2">
                    <li class="list-group-item sub-item">Item</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                </div>

                <li href="#menupos1" class="list-group-item collapsed collapser">Parent Item<span class="float-right">
                        <i class="fa"></i></span></li>

                <div class="collapse  sub-menu-bg" id="menupos2">
                    <li class="list-group-item sub-item">Item</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                </div>

                <li href="#menupos1" class="list-group-item collapsed collapser">Parent Item<span class="float-right">
                        <i class="fa"></i></span></li>

                <div class="collapse  sub-menu-bg" id="menupos2">
                    <li class="list-group-item sub-item">Item</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                </div>

                <li href="#menupos1" class="list-group-item collapsed collapser">Parent Item<span class="float-right">
                        <i class="fa"></i></span></li>

                <div class="collapse  sub-menu-bg" id="menupos2">
                    <li class="list-group-item sub-item">Item</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                    <li href="#" class="list-group-item sub-item">SubItem</li>
                </div>
            </div>
    </div>
    </ul>

    </div>
    </div>



    <script>
    var subitem = $('.sub-item');

    $('.collapser').click(function() {

        // submenu.removeClass('show');
        // $('.sub-menu-bg').removeClass('.show');


        $(this).next().collapse('toggle');

    });


    //     $('#result li').click(function(){
    //      $(this).find('i').toggleClass('fas fa-chevron-down')
    //  });
    </script>

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
    <!--style="display:none"-->

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
                <h3>To start, enter a policy, goal or indicator, and begin selecting</h3>
                <!-- <h3 style="font-size: 18px;">Or click on suggested searches<br><br><br> <small>Learn More</small></h3> -->

                <!-- <i class="fas fa-chevron-circle-up rotate fa-2x icon-color"></i> -->
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
                                <button id="CreateModel" class="btn btn-info">Create Model</button>
                                <button style="display: none" id="SendModel" class="btn btn-info">Send Model</button>
                                <button id="QuestionModal" class="btn btn-info" data-toggle="modal"
                                    data-target="#question-modal">Align Policies</button>

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






                <div id="push"></div>


                <!-- Modal -->
                <div class="modal fade" id="question-modal" tabindex="-1" role="dialog" data-keyboard="false"
                    data-backdrop="static" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title machina-font ml-4" id="exampleModalLongTitle">Answer the
                                    questions to help us
                                    narrow your
                                    search</h4>

                            </div>
                            <div class="modal-body">

                                <div class="media">
                                    <i class="align-middle fas fa-question-circle fa-4x mr-3"></i></i>
                                    <div class="media-body mb-2">

                                        <p class="mt-1">Ensure you read and toggle yes/no for each question. <br>Your
                                            answers to
                                            the questions below have an affect on the final generated model</p>

                                    </div>
                                </div>

                                <ul class="list-group question-list-group">
                                    <li class="list-group-item align-middle question">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit
                                        <label class="align-right switch float-right mb-0">
                                            <input type="checkbox" name="data[question1]" id="question1"
                                                value="question1">
                                            <span class="slider round"><span class="on unselectable">Yes</span><span
                                                    class="off unselectable">No</span></span>
                                        </label>
                                    </li>
                                    <li class="list-group-item align-middle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                        <label class="align-right switch float-right mb-0">
                                            <input type="checkbox" name="data[question1]" id="question2"
                                                value="question2">
                                            <span class="slider round"><span class="on unselectable">Yes</span><span
                                                    class="off unselectable">No</span></span>
                                        </label>
                                    </li>
                                    <li class="list-group-item align-middle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                        <label class="align-right switch float-right mb-0">
                                            <input type="checkbox" name="data[question1]" id="question3"
                                                value="question3">
                                            <span class="slider round"><span class="on unselectable">Yes</span><span
                                                    class="off unselectable">No</span></span>
                                        </label>
                                    </li>
                                    <li class="list-group-item align-middle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                        <label class="align-right switch float-right mb-0">
                                            <input type="checkbox" name="data[question1]" id="question4"
                                                value="question4">
                                            <span class="slider round"><span class="on unselectable">Yes</span><span
                                                    class="off unselectable">No</span></span>
                                        </label>
                                    </li>
                                    <li class="list-group-item align-middle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                        <label class="align-right switch float-right mb-0">
                                            <input type="checkbox" name="question5" id="question5" value="question5">
                                            <span class="slider round"><span class="on unselectable">Yes</span><span
                                                    class="off unselectable">No</span></span>
                                        </label>
                                    </li>
                                    <li class="list-group-item align-middle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                        <label class="align-right switch float-right mb-0">
                                            <input type="checkbox" name="question6" id="question6" value="question6">
                                            <span class="slider round"><span class="on unselectable">Yes</span><span
                                                    class="off unselectable">No</span></span>
                                        </label>
                                    </li>
                                    <li class="list-group-item align-middle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                        <label class="align-right switch float-right mb-0">
                                            <input type="checkbox" name="question7" id="question7" value="question7">
                                            <span class="slider round"><span class="on unselectable">Yes</span><span
                                                    class="off unselectable">No</span></span>
                                        </label>
                                    </li>
                                    <li class="list-group-item align-middle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                        <label class="align-right switch float-right mb-0">
                                            <input type="checkbox" name="question8" id="question8" value="question8">
                                            <span class="slider round"><span class="on unselectable">Yes</span><span
                                                    class="off unselectable">No</span></span>
                                        </label>
                                    </li>
                                    <li class="list-group-item align-middle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                        <label class="align-right switch float-right mb-0">
                                            <input type="checkbox" name="question9" id="question9" value="question9">
                                            <span class="slider round"><span class="on unselectable">Yes</span><span
                                                    class="off unselectable">No</span></span>
                                        </label>
                                    </li>
                                    <li class="list-group-item align-middle">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit
                                        <label class="align-right switch float-right mb-0">
                                            <input type="checkbox" name="question10" id="question10" value="question10">
                                            <span class="slider round"><span class="on unselectable">Yes</span><span
                                                    class="off unselectable">No</span></span>
                                        </label>
                                    </li>


                                </ul>

                            </div>
                            <div class="modal-footer">
                                <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                                <button type="submit" class="btn btn-primary" id="submit">Regenerate Model</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-5">

                    <div class="menu pt-6">
                        <nav id="stack-menu">
                            <ul>
                                <li><a class="suggested-font">Suggested Searches</a>
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
        <h4 id="create-model-btn">Model Output and Implementation Table</h4>
        <ul class="nav nav-tabs">
            <li class="nav-item  tab-link active"><a class="nav-link active atab" href="#a_tab" data-toggle="tab">1.
                    Model</a></li>
            <li class="nav-item tab-link"><a class="nav-link btab" href="#b_tab" data-toggle="tab">2. Description</a>
            </li>
            <li class="nav-item tab-link"><a class="nav-link btab" href="#c_tab" id="SaveIndicators"
                    data-toggle="tab">3. Save Project</a>
            </li>
            <li class="nav-item tab-link" id="refreshed"><a class="nav-link ctab" href="#d_tab" data-toggle="tab">4.
                    Implementation
                    Table</a></li>
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

            <div class="tab-pane text-left" id="c_tab">
                <section class="jumbotron" style="margin-top: 0; margin-bottom: 0;">
                    <div class="container">
                        <div class=" row">
                            <div class="col-md-12">
                                <h1 style="text-align: left;">Enter Project Info</h1>
                                <h3 style="font-size: 18px;">To save your project, enter the project's information below
                                    (ensure you
                                    are happy with the above created model before proceeding)<br>
                                    <br>

                                    <div class="container">
                                        <div class="row align-items-center">
                                            <div class="col-md-6">

                                                <form id="addform" action="" method="post">
                                                    <div class="form-group">
                                                        <br>
                                                        <label for="formGroupExampleInput">Project Name</label>
                                                        <input type="text" class="form-control" id="projectname"
                                                            name="projectName" placeholder="Enter Project Name"
                                                            required />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="formGroupExampleInput2">Value</label>


                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text"
                                                                    for="inputGroupSelect01"><b>£</b></label>
                                                            </div>
                                                            <input type="text" class="form-control" id="value"
                                                                name="projectValue" placeholder="Enter Estimated Value"
                                                                required />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <div id="locationField">
                                                            <label for="formGroupExampleInput2">Project Location</label>
                                                            <input class="form-control" value="" id="autocomplete"
                                                                name="projectLocation" placeholder="Enter an address"
                                                                type="text" required />
                                                        </div>
                                                    </div>


                                                    <div class="form-group">
                                                        <label for="formGroupExampleInput2">Project Delivery
                                                            Date</label>
                                                        <input type="text" class="form-control" id="datepicker"
                                                            name="projectDeliveryDate"
                                                            placeholder="Choose delivery date" required />
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="formGroupExampleInput2">Project Delivery Partners
                                                            <small class="manrope-font"><br>(Select from list, or type
                                                                your
                                                                own)</small></label><br>
                                                        <select id="select-partners" name="projectDeliveryPartners"
                                                            class="form-control" multiple="multiple" required>
                                                            <option>Belfast City Council</option>
                                                            <option>Public Health Agency</option>
                                                            <option>Department for Infrastructure</option>
                                                            <option>Department for Communities</option>
                                                            <option>Department of Health</option>
                                                        </select>
                                                    </div>

                                                    <div class="form-group d-none">
                                                        <br>

                                                        <input type="text" class="form-control" id="formGroupModelData"
                                                            name="modelDataToSend" required />
                                                    </div>
                                                    <!--
                <div class="form-group">
                        <div class="input-group-prepend">
                            <label class="form-control" for="inputGroupSelect01"></label>
                        </div>
                        <input display="none" type="text" class="form-control" id="formGroupModelData"
                            placeholder="ModelData" name="modelDataToSend"
                            value="<?php echo htmlspecialchars($modelDataToSend) ?>"  required />
                    </div>
                </div>--->
                                                    <input name="submit" type="submit" value="Save Project"
                                                        class="btn btn-info mt-5 btn AddIndicators">
                                                </form>

                                                <p id="message"></p>




                                                <script>
                                                $(document).ready(function() {
                                                    $("#addform").submit(function(e) {
                                                        e.preventDefault();
                                                        // var projectname = $("#name").val();
                                                        // var projectValue = $("#value").val();
                                                        // var projectLocation = $("#autocomplete").val();
                                                        // var projectDeliveryDate = $("#datepicker").val();
                                                        // var projectDeliveryPartners = $("#select-partners").val();
                                                        // var modelDataToSend = $("#formGroupModelData").val();
                                                        $.ajax({
                                                            url: 'add.php',
                                                            method: 'POST',
                                                            data: $("#addform").serialize(),
                                                            dataType: "text",
                                                            // data: {
                                                            //     projectName: projectName,
                                                            //     projectValue: projectValue,
                                                            //     projectLocation: projectLocation,
                                                            //     projectDeliveryDate: projectDeliveryDate,
                                                            //     projectDeliveryPartners: projectDeliveryPartners,
                                                            //     modelDataToSend: modelDataToSend
                                                            // },
                                                            success: function(strMessage) {
                                                                $("#message").text(
                                                                    strMessage);
                                                                $("#addform")[0].reset();
                                                            }
                                                        });
                                                    });
                                                });
                                                </script>


                                            </div>
                                            <div class="col-md-6 text-center"><img src="img/add.svg" width="400px"
                                                    alt=""></div>
                                        </div>
                                    </div>



                                    <script>
                                    document.getElementById("formGroupModelData").style.display = "none";
                                    </script>
                </section>
            </div>

            <div class="tab-pane text-left" id="d_tab">

                <section class="jumbotron" style="margin-top: 0; margin-bottom: 0;">

                    <div class="container">
                        <div class=" row">
                            <div class="col-md-12">

                                <h3 style="text-align: left;">1. Click a project to view or edit implementation
                                    table<br></h1>
                                    <!-- <button class="btn btn-success mb-4 mt-2" id="refresh"><span
                                                aria-hidden="true"></span>Refresh Projects<i class="ml-2 fas fa-sync-alt"></i></button> -->

                                    <!-- <button id="refresh" class="btn btn-primary">Refresh Table</button> -->
                                    <table id="projectparent" class="table w-100 table-bordered table-striped display">
                                        <thead class="table-head">
                                            <tr>
                                                <th>Project Name</th>
                                                <th>No. of Actions</th>
                                                <th>Model Data</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <button class="btn btn-primary" id="LoadImplementation">Load implementation table
                                        test</button>



                                    <!-- <button class="btn btn-info mb-4 mt-2" id="CreateData"> <span
                                                aria-hidden="true"></span>Load Current Model Indicators<i
                                                class="fas fa-plus-circle fa-fw"></i></button> -->

                                    <h3 id="projecttext" class="mt-5">Implementation Table</h3>
                                    <hr>


                                    <table id="implementationtable"
                                        class="table w-100 table-bordered table-striped display">
                                        <thead class="table-head">
                                            <tr>
                                                <th>Indicators</th>
                                                <th>Action</th>
                                                <th>Measurables</th>
                                                <th>£ Value</th>
                                                <th>Partners</th>
                                                <th>More Info</th>
                                                <th>Project Name</th>


                                            </tr>
                                        </thead>
                                    </table>
                                    <button class="btn btn-primary" id="addnewrow">Add Row</button>







                            </div>

                </section>
                <!-- <h1>Implementation Table</h1>
                <div class="table-responsive mt-5">
                    <!-- <table id="implementation" class="table w-100 table-bordered table-striped" id="Table">
                        <thead class="table-head">
                            <tr>
                                <th>Policy Indicator</th>
                                <th>Action</th>
                                <th>Measurables</th>
                                <th>Key Partners</th>
                            </tr>
                        </thead>

                        
                    </table> -->





                <!-- <table id="example" class="table w-100 table-bordered table-striped display" id="Table">
                        <thead class="table-head">
                            <tr>

                                <th>Action</th>
                                <th>Indicator</th>
                                <th>Measurables</th>
                                <th>Key Partners</th>
                                <th>More Info</th>
                                <th>Project Name</th>


                            </tr>

                        </thead>
                        <tbody id="tableData">

                        </tbody>
                    </table>
                </div>
                <button class="btn btn-info" id="CreateTable"> <span aria-hidden="true"></span>Create Implementation
                    Table <i class="fas fa-plus-circle fa-fw"></i></button> -->
                <!-- <button class="btn btn-success" id="save"> Save Implementation Table <i
                        class="fas fa-save fa-fw"></i></button> -->
            </div>
            <!-- <div class="tab-pane" id="modelMap" style="width: 600px; height: 400px; padding-left: 50px;">
         <h1>Map</h1>
        <ccontent></ccontent></div> -->

        </div>



        <div class="svg-bg" id="model-svg-div">
            <svg id="center-svg" class="center-svg" viewBox="0 0 2000 2500"></svg>

        </div>
        <div style="display:none" class="svg-bg" id="desc-svg-div">
            <svg id="desc-svg" class="center-svg" viewBox="0 0 2000 2500"></svg>
        </div>

        <button class="btn btn-info" id="download-png"> <span aria-hidden="true"></span>Download
            Image</button>
        <button class="btn btn-info" id="download-svg"> <span aria-hidden="true"></span>Download
            Vector</button>
        <button class="btn btn-hidden" id="viewLoaded"> <span aria-hidden="true"></span>View Loaded
            Model</button>


    </div>

    <hr>
    <section class="jumbotron" style="margin-top: 0; margin-bottom: 0;">

        <div class="container">
            <div class=" row">
                <div class="col-md-12">
                    <h1 style="text-align: left;">All Projects</h1>
                    <h3 style="font-size: 18px;">Below you can view all the projects that have been entered into the
                        Policy tool, including their model<br>
                        <br><br>


                        <table id="projects" class="table w-100 table-bordered table-striped display" id="Table">
                            <thead class="table-head">
                                <tr>
                                    <th>Project Name</th>
                                    <th>Project Value (£)</th>
                                    <th>Delivery Date</th>
                                    <th>Project Location</th>
                                    <th>Delivery Partners</th>
                                    <th>Model</th>

                                </tr>

                            </thead>

                        </table>



                </div>

    </section>

    <style>
    td {
        color: black;
    }
    </style>



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







<style>
.DTE_Field_InputControl>select {
    overflow-x: scroll;
    width: 400px;
}


.DTE_Field_InputControl>#DTE_Field_implementation-indicator {
    height: 200px
}

#DTE_Field_implementation-project {
    width: 260px !important;
}



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



<script>
// var editor;
// var editor1; // use a global for the submit and return data rendering in the examples

// $(document).ready(function() {
//     editor = new $.fn.dataTable.Editor({
//         ajax: 'Editor-PHP-1.9.5/controllers/imptable.php',
//         table: '#example',
//         fields: [{
//                 label: "Actions",
//                 name: "implementation.action"
//             }, {
//                 label: "Measurables:",
//                 name: "implementation.measurables"
//             }, {
//                 label: "Partners:",
//                 name: "implementation.partners"
//             },
//             {
//                 label: "More Info:",
//                 name: "implementation.moreinfo"
//             },
//             {
//                 label: "Project Name",
//                 name: "implementation.project",
//                 type: "select",
//                 placeholder: "Select a project"
//             },


//         ],
//         formOptions: {
//             main: {
//                 scope: 'cell' // Allow multi-row editing with cell selection
//             }
//         },


//     });


// console.log(indicatorData);
// $("#CreateTable").click(function() {
//     editor.add({
//         type: 'select',
//         label: 'Select Indicators:',
//         name: 'indicator',
//         multiple: true,
//         separator: ',',
//         options: indicatorData
//     });

// });

// $( "#UpdateProjects" ).click(function() {
//     editor.add( {
//                 type:     'select',
//                 label:    'Projects:',
//                 name:     'projects',
//                 multiple: true,
//                 separator: ',',
//                 options: projectsData
//             } );

//         });        

//create new table
//add empty row button
//retrieve indicator tableData
//add multiselect form field and map to table field







// $('#example').on('click', 'tbody td:not(:first-child)', function(e) {
//     editor.inline(this, {

//         submit: 'allIfChanged'
//     });
// });

// $('#example').on('click', 'tbody td', function(e) {
//     editor.bubble(this);
// });



//  // Activate an inline edit on click of a table cell
//  $('#example').on( 'click', 'tbody td:not(:first-child)', function (e) {
//     editor.inline( this, {
//         onBlur: 'submit'
//     } );

// } );


//     $('#example').DataTable({
//         "language": {
//             "emptyTable": "Click create button below to view and edit your implementation table"
//         },
//         dom: 'Bfrtip',


//         columns: [{
//                 "data": "action",
//                 editField: "implementation.action"
//             },
//             {
//                 "data": "indicator",
//                 editField: "indicator"
//             },
//             {
//                 "data": "measurables",
//                 editField: "implementation.measurables"
//             },
//             {
//                 "data": "partners",
//                 editField: "implementation.partners"
//             },
//             {
//                 "data": "moreinfo",
//                 editField: "implementation.moreinfo"
//             },
//             {
//                 data: "projects.projectName",
//                 editField: "implementation.project"
//             }
//         ],
//         select: true,
//         buttons: [{
//                 extend: "edit",
//                 editor: editor
//             },
//             {
//                 extend: "remove",
//                 editor: editor
//             },
//             {
//                 extend: "create",
//                 editor: editor
//             },

//             "selectColumns",
//         ]
//     });
// });


// $(document).ready(function() {
//     editor = new $.fn.dataTable.Editor( {
//         ajax: 'Editor-PHP-1.9.5/controllers/imptable.php',
//         table: '#example',
//         fields: [ {
//                 label: "Action",
//                 name: "action"
//             }, {
//                 label: "Measurables",
//                 name: "measurables"
//             }, {
//                 label: "Partners",
//                 name: "partners"
//             }, {
//                 label: "Project",
//                 name: "project"
//             }
//         ]
//     } );

//     $('#example').DataTable( {
//         dom: 'Bfrtip',
//         columns: [
//             { data: "action" },
//             { data: "indicator" },
//             { data: "measurables" },
//             { data: "partners" },
//             { data: "project" }
//         ],
//         select: true,
//         buttons: [
//             { extend: "create", editor: editor },
//             { extend: "edit",   editor: editor },
//             { extend: "remove", editor: editor }
//         ]
//     } );
// } );


//      $('#example').on( 'click', 'tbody td', function (e) {
//          editor.bubble( this );
//      } );



//      $( "#CreateModel" ).click(function() {


//         editor.add( {
//             type:  'select',
//             label:  'Indicators',
//             name:   'indicator',
//             multiple: true,
//             separator: ',',
//             options: [ "Test1", "Test2" ]
//         } );




//    });





$(document).ready(function() {
    editor1 = new $.fn.dataTable.Editor({
        ajax: "Editor-PHP-1.9.5/controllers/projects.php",
        table: "#projects",
        fields: [{
            label: "Project Name:",
            name: "projectName"
        }, {
            label: "Project Value:",
            name: "projectValue"
        }, {
            label: "Delivery Date:",
            name: "deliveryDate"
        }, {
            label: "Project Location:",
            name: "projectLocation"
        }, {
            label: "Delivery Partners",
            name: "deliveryPartners"
        }, {
            label: "Model",
            name: "modelData"
        }]
    });


    $('#projects').DataTable({
        select: true,
        dom: "Bfrtip",
        ajax: "Editor-PHP-1.9.5/controllers/projects.php",
        columns: [{
                data: "projectName"
            },
            {
                data: "projectValue",
                render: function(data) {
                    allProjectsValue += data;
                    // console.log(allProjectsValue);
                    return data;
                }
            },
            {
                data: "deliveryDate"
            },
            {
                data: "projectLocation"
            },
            {
                data: "deliveryPartners"
            },
            {
                data: "modelData",
                render: function(data, type, row, i) {
                    var temp = data;
                    temp.replace('"nodes"', "nodes");
                    temp.replace('"links"', "links");

                    // allModels[row.DT_RowId] =JSON.parse(temp);


                    return '<button "type="button" id="' + row.DT_RowId +
                        '" onClick="setId(this.id)" class="btn btn-info">Load Model</button>';
                }
            }

        ],

        buttons: [{
            extend: "remove",
            editor: editor1,
            text: 'Remove Project'
        }]
    });


    ;




});




//PARENT CHILD *******

$(document).ready(function() {
    var projectEditor = new $.fn.dataTable.Editor({
        ajax: "Editor-PHP-1.9.5/controllers/projects-parent.php",
        table: "#projectparent",
        fields: [{
            label: "Project name:",
            name: "projectName"
        }]
    });





    var projectTable = $('#projectparent').DataTable({

        //select most recent project on load
        "initComplete": function(settings, json) {
            projectTable.row(':eq(0)', {
                page: 'current'
            }).select();
        },

        "order": [
            [3, "desc"]
        ],
        "pageLength": 5,
        dom: "Bfrtip",
        ajax: "Editor-PHP-1.9.5/controllers/projects-parent.php",
        columns: [{
                data: 'projectName'
            },
            {
                data: 'modelData',
                "visible": false
            },
            {
                data: 'implementation',
                render: function(data) {
                    return data.length;
                }
            },
            {
                data: 'creationTime',
                "visible": false
            },
        ],
        select: {
            style: 'single'
        },
        buttons: []


    });






    // loading current project implementation table - this function could be attached to view model, load model buttons etc to load implementation table
    $('#LoadImplementation').on('click', function() {
        projectTable.rows({
            search: 'applied'
        }).every(function(rowIdx, tableLoop, rowLoop) {
            if (projectTable.row(rowIdx).data().projectName ==
                'Relink Belfast') { //change Relink Belfast to currently loaded/created project name, which could be stored in a global variable or something
                $(this.node()).addClass('selected');
                $(projectTable.row(rowIdx).select().show().draw(
                false)); //select and display implementation table based on project name 
            }
        });
    });



    $('#refreshed').on('click', function() {
        projectTable.ajax.reload(null, false);
    });


    var impEditor = new $.fn.dataTable.Editor({
        ajax: {
            url: 'Editor-PHP-1.9.5/controllers/implementation-child.php',
            data: function(d) {
                var selected = projectTable.row({
                    selected: true
                });
                if (selected.any()) {
                    d.project = selected.data().id;
                }
            }
        },
        table: '#implementationtable',
        fields: [{
                label: "Enter Actions",
                name: "implementation.action"
            }, {
                label: "Enter Measurables",
                name: "implementation.measurables"
            },
            {
                label: "Enter Action Value (£)",
                name: "implementation.value"
            },
            {
                label: "Enter Partners",
                name: "implementation.partners"
            },
            {
                label: "Enter Additional Info",
                name: "implementation.moreinfo"
            },

            {
                label: "Project",
                name: "implementation.project",
                type: "select",
                placeholder: "Select a project"
            }
        ]
    });







    //need to add this function after project load and creation
    $(".AddIndicators").click(function() {

        //   if()  
        impEditor.add({
            type: 'select',
            label: 'Select Indicators:',
            name: 'implementation.indicator',
            multiple: true,
            separator: ',<br>',
            options: indicatorData
        });
    });




    var implementationTable = $('#implementationtable').DataTable({



        "language": {
            "emptyTable": "<b>Click on a project above to view and edit it's implementation table</b>"
        },
        dom: 'Bfrtip',
        ajax: {
            url: 'Editor-PHP-1.9.5/controllers/implementation-child.php',
            type: 'post',
            data: function(d) {
                var selected = projectTable.row({
                    selected: true
                });
                if (selected.any()) {
                    d.project = selected.data().id;
                    d.projectName = selected.data().projectName
                    d.modelData = selected.data().modelData
                    // console.log(d.modelData);
                    console.log(d.projectName);

                    $('#projecttext').text(d.projectName + " Implementation Table");


                    //add row button            
                    // $('#addnewrow').on('click', function(e) {
                    //     implementationTable.row.add( ["", "", "", "", "", "", d.ProjectName] ).draw( false );
                    // });

                }
            }
        },
        columns: [{
                data: 'implementation.indicator',
                editField: "implementation.indicator"
            },
            {
                data: 'implementation.action',
                editField: 'implementation.action'
            },
            {
                data: 'implementation.measurables',
                editField: 'implementation.measurables'
            },
            {
                data: 'implementation.value',
                editField: 'implementation.value'
            },
            {
                data: 'implementation.partners',
                editField: 'implementation.partners'
            },
            {
                data: 'implementation.moreinfo',
                editField: 'implementation.moreinfo'
            },
            {
                data: 'projects.projectName',
                editField: 'implementation.project',
                "visible": false
            }
        ],
        select: true,
        buttons: [{
                extend: 'create',
                editor: impEditor,
                enabled: false,
                init: function(dt) {
                    var that = this;
                    projectTable.on('select deselect', function() {
                        that.enable(projectTable.rows({
                            selected: true
                        }).any())
                    })
                }
            },
            {
                extend: 'edit',
                editor: impEditor
            },
            {
                extend: 'remove',
                editor: impEditor
            }
        ]
    });




    // $('#implementationtable').on('dblclick', 'tbody td', function(e) {
    //     impEditor.bubble(this, {
    //         submit: 'changed'
    //     });
    // });


    //     $('#implementationtable').on( 'click', 'tbody tr', function () {
    //         impEditor.bubble( this, {
    //             submit: 'changed'        
    //     } );

    //         impEditor.field( 'implementation.indicator' ).clear();
    // } );
    // $('#implementationtable').on( 'click', 'tbody td:not(:first-child)', function (e) {
    //     projectEditor.inline( this );
    // } );


    // $('#implementationtable').on('click', 'tbody td:not(:first-child)', function(e) {
    //     projectEditor.inline(this, {
    //         submit: 'allIfChanged'
    //     });
    // });

    // $('#implementationtable').on( 'click', 'tbody td:not(:first-child)', function (e) {
    //     projectEditor.inline( implementationTable.cell(this).index(), {
    //         onBlur: 'submit'
    //     } );
    // } );



    projectTable.on('select', function(e) {
        implementationTable.ajax.reload();

        impEditor
            .field('implementation.project')
            .def(projectTable.row({
                selected: true
            }).data().id);
    });

    projectTable.on('deselect', function() {
        implementationTable.ajax.reload();
    });

    impEditor.on('submitSuccess', function() {
        projectTable.ajax.reload();
    });

    projectEditor.on('submitSuccess', function() {
        implementationTable.ajax.reload();
    });
});
</script>


<style>
.flex-center {
    display: flex !important;
    justify-content: center !important;
}


.canvas-center {
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
</style>




<hr>
<section class="mt-5">
    <div class="container-fluid">
        <div class="container">
        <h1 style="text-align: left;" class="display-4">Insights</h1>
        <h3 style="font-size: 18px;">PFG Indicators hit across all projects per ... <br>
        <br>
      
        <!-- Could be used for filtering -->
            <div class="dropdown">
                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>

            </div>
            <br><br>
            <!-- Grid of 6-6-2 -->
            <div class="row mt-5 flex-center">
                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 1
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg1" style="width: 230px;"></canvas>

                </div>
                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 2
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg2" style="width: 230px;"></canvas>

                </div>
                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 3
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg3" style="width: 230px;"></canvas>

                </div>

                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 4
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg4" style="width: 230px;"></canvas>

                </div>

                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 5
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg5" style="width: 230px;"></canvas>

                </div>

                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 6
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg6" style="width: 230px;"></canvas>

                </div>


            </div>
            <div class="row flex center text-center" style="justify-content: center; margin-top: 20px;">
                <div class="col-lg-2">
                    <h5>
                        PFG Target 7
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg7" style="width: 230px;"></canvas>

                </div>
                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 8
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg8" style="width: 230px;"></canvas>

                </div>
                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 9
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg9" style="width: 230px;"></canvas>

                </div>

                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 10
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg10" style="width: 230px;"></canvas>

                </div>

                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 11
                        <canvas class="canvas-center" id="insights-pfg11" style="width: 230px;"></canvas>

                </div>

                <div class="col-lg-2 text-center">
                    <h5 class="text-center">
                        PFG Target 12
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg12" style="width: 230px;"></canvas>

                </div>


            </div>

            <div class="row mt-5 mb-5 flex-center text-center">
                <div class="col-lg-2">


                </div>
                <div class="col-lg-2 text-center">

                </div>
                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 13
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg13" style="width: 230px;"></canvas>

                </div>

                <div class="col-lg-2 text-center">
                    <h5>
                        PFG Target 14
                    </h5>
                    <canvas class="canvas-center" id="insights-pfg14" style="width: 230px;"></canvas>

                </div>

                <div class="col-lg-2 text-center">


                </div>

                <div class="col-lg-2 text-center">


                </div>


            </div>



    </div>
    </div>

    <footer id="footer">
        <div class="container">
            <h3>USI Policy Tool</h3>
            <div class="copyright">
                Developed by Urban Scale Interventions
            </div>


        </div>
    </footer>

    </body>


    <script src='Insights.js'></script>

</html>
<!-- <div class="model-bg"> -->




<!--TABLE CODE-->


<!-- <script>
  //add suggested search to bar and fire event when changed

  $(" .suggest-click").on("click", function (e) { $("#search").val(e.target.innerText); console.log("Test .val");
      $("#search").change(); }); $(document).ready(function () { $('#stack-menu').stackMenu(); }); </script> </html> -->
<!-- <div class="model-bg"> -->