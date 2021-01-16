/*
          //onclick function for showOnly function (UNSDG)
          //TODO: write more general for other parentGroups
          document.getElementById("SHOWONLYUNSDG").onclick = function () {
            showOnly("UN Sustainable Development Goals");
          };
          document.getElementById(
            "SHOWONLYA Bolder Vision for Belfast"
          ).onclick = function () {
            showOnly("A Bolder Vision for Belfast");
          };
          document.getElementById(
            "SHOWONLYA City Imagining"
          ).onclick = function () {
            showOnly("A City Imagining");
          };
          document.getElementById(
            "SHOWONLYBelfast Agenda"
          ).onclick = function () {
            showOnly("Belfast Agenda");
          };
          document.getElementById(
            "SHOWONLYBelfast Agenda Immediate Priorities"
          ).onclick = function () {
            showOnly("Belfast Agenda Immediate Priorities");
          };
          document.getElementById(
            "SHOWONLYBelfast City Council Local Development Plan"
          ).onclick = function () {
            showOnly("Belfast City Council Local Development Plan");
          };
          document.getElementById(
            "SHOWONLYBelfast City Council Open Spaces Strategy"
          ).onclick = function () {
            showOnly("Belfast City Council Open Spaces Strategy");
          };
          document.getElementById(
            "SHOWONLYBelfast City Council Public Realm"
          ).onclick = function () {
            showOnly("Belfast City Council Public Realm");
          };
          document.getElementById(
            "SHOWONLYBelfast Green and Blue Infrastructure Plan"
          ).onclick = function () {
            showOnly("Belfast Green and Blue Infrastructure Plan");
          };
          document.getElementById(
            "SHOWONLYCulture 2030 Indicators"
          ).onclick = function () {
            showOnly("Culture 2030 Indicators");
          };
          document.getElementById(
            "SHOWONLYDerry City And Strabane District’s Inclusive Strategic Growth Plan"
          ).onclick = function () {
            showOnly(
              "Derry City And Strabane District’s Inclusive Strategic Growth Plan"
            );
          };
          document.getElementById(
            "SHOWONLYProgramme for Government"
          ).onclick = function () {
            showOnly("Programme for Government");
          };
          document.getElementById(
            "SHOWONLYProtect Life 2 - Suicide Prevention Strategy"
          ).onclick = function () {
            showOnly("Protect Life 2 - Suicide Prevention Strategy");
          };
          document.getElementById("SHOWONLY Resilience").onclick = function () {
            showOnly("Resilience");
          };
          document.getElementById(
            "SHOWONLYResilience - Shocks and Stresses"
          ).onclick = function () {
            showOnly("Resilience - Shocks and Stresses");
          };
          document.getElementById(
            "SHOWONLYWHO 5 Ways To Wellbeing"
          ).onclick = function () {
            showOnly("WHO 5 Ways To Wellbeing");
          };
          document.getElementById(
            "SHOWONLYWHO Arts Components"
          ).onclick = function () {
            showOnly("WHO Arts Components");
          };

          //! NEEDS A LOOP FUNCTION
          //onclick function for showGroup function
          //TODO: needs to save original model so when clicked again/unclicked it shows original model
          //* Ensure that function uses original model otherwise will connect nodes from nodes that weren't in the original model
          document.getElementById("UNSDG").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "UN Sustainable Development Goals");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "A Bolder Vision for Belfast"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "A Bolder Vision for Belfast");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById("A City Imagining").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "A City Imagining");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById("Belfast Agenda").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Belfast Agenda");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Belfast Agenda Immediate Priorities"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Belfast Agenda Immediate Priorities");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Belfast City Council Local Development Plan"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(
                json,
                temp,
                "Belfast City Council Local Development Plan"
              );
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Belfast City Council Open Spaces Strategy"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(
                json,
                temp,
                "Belfast City Council Open Spaces Strategy"
              );
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Belfast City Council Public Realm"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Belfast City Council Public Realm");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Belfast Green and Blue Infrastructure Plan"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(
                json,
                temp,
                "Belfast Green and Blue Infrastructure Plan"
              );
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Culture 2030 Indicators"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Culture 2030 Indicators");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Derry City And Strabane District’s Inclusive Strategic Growth Plan"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(
                json,
                temp,
                "Derry City And Strabane District’s Inclusive Strategic Growth Plan"
              );
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Programme for Government"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Programme for Government");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Protect Life 2 - Suicide Prevention Strategy"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(
                json,
                temp,
                "Protect Life 2 - Suicide Prevention Strategy"
              );
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById("Resilience").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Resilience");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "WHO 5 Ways To Wellbeing"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "WHO 5 Ways To Wellbeing");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById("WHO Arts Components").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "WHO Arts Components");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          
*/

//document.getElementById("CreateSheet").onclick = function () {};

//  var temp = JSON.parse(JSON.stringify(pass));
// showGroup(json, temp, "Programme for Government");

/*document.getElementById("Foyle Groups").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              /*showGroup(json, temp, "UN Sustainable Development Goals");
              showGroup(
                json,
                temp,
                "Derry City And Strabane District’s Inclusive Strategic Growth Plan"
              );
              showGroup(
                json,
                temp,
                "Protect Life 2 - Suicide Prevention Strategy"
              );
              showGroup(json, temp, "Making Life Better");
              showGroupFoyle(json, temp);
              create(temp);
              originalPass = pass;
              ////////console.log
              originalPass;
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
              originalPass;
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
*/
