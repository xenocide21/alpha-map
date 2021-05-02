    // <!--
    function hidify_showify(e_table, e_img) {
        if (document.getElementById) {
            var id_table = document.getElementById(e_table).style;
            var id_img = document.getElementById(e_img);

            //Set the object to table-cell if the browser is
            //Firefox and block if it is anything else.
            if (navigator.userAgent.indexOf("Firefox") !== -1) {
                if (id_table.display === "table-cell") {
                    id_table.display = "none";
                    id_img.src = "./images/arrow_down.gif";
                    id_img.alt = "Expand";
                } else {
                    id_table.display = "table-cell";
                    id_img.src = "./images/arrow_up.gif";
                    id_img.alt = "Collapse";
                }
            } else {
                if (id_table.display === "block") {
                    id_table.display = "none";
                    id_img.src = "./images/arrow_down.gif";
                    id_img.alt = "Expand";
                } else {
                    id_table.display = "block";
                    id_img.src = "./images/arrow_up.gif";
                    id_img.alt = "Collapse";
                }
            }
            return false;
        } else {
            return true;
        }
    }

    // -->