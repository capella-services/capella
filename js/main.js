$(document).ready(function() {
    // $('#firststep').sparkline([65,25,15], {
    //     type: "pie",
    //     // Map the offset in the list of values to a name to use in the tooltip
    //     height:154,
    //     sliceColors:['#BDBEC0','#BF252C', '#403E43'],
    //     borderWidth: 7,
    //     borderColor: '#f5f5f5',
    //     tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)',
    //     tooltipValueLookups: {
    //         names: {
    //             0: 'Vous et Nous',
    //             1: 'Responsable produit',
    //             2: 'Vous et Nous'
    //             // Add more here
    //         }
    //     }
    //
    // });
    //
    // $('#secondstep').sparkline([55,25,15,10], {
    //     type: "pie",
    //     // Map the offset in the list of values to a name to use in the tooltip
    //     height:154,
    //     sliceColors:['#BDBEC0','#BF252C','#403E43','#DEDEDC'],
    //     tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)',
    //     tooltipValueLookups: {
    //         names: {
    //             0: 'Vous et Nous',
    //             1: 'Ingénieur logiciel',
    //             2: 'Responsable produit',
    //             3: 'Ingénieur logiciel'
    //         }
    //     }
    //
    // });
    //
    // $('#thirdstep').sparkline([60,20,10], {
    //     type: "pie",
    //     // Map the offset in the list of values to a name to use in the tooltip
    //     height:154,
    //     sliceColors:['#BDBEC0','#BF252C', '#403E43'],
    //     tooltipFormat: '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)',
    //     tooltipValueLookups: {
    //         names: {
    //             0: 'Ingénieur logiciel',
    //             1: 'Responsable produit',
    //             2: 'Ingénieur logiciel'
    //         }
    //     }
    // });
    var myFirstStep = $("#myFirstStep");

    var firstStep = new Chart(myFirstStep,{
        type: 'doughnut',
        data: data,
        options: {}
    });

    var data = {
        labels: [
            "Vous et Nous",
            "Responsable produit",
            "Vous et Nous"
        ],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#BDBEC0",
                    "#BF252C",
                    "#403E43"
                ],
                hoverBackgroundColor: [
                    "#BDBEC0",
                    "#BF252C",
                    "#403E43"
                ]
            }]
    };
});
