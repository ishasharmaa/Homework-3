const org1_depts = [
    {
        name: 'accounting',
        children: [
            {
                name: 'accounting payable',
                children: []
            },{
                name: 'accounting receivable', 
                children: []
            }
        ]
    },{
        name: 'finance',
        children: [],
    }
]

const org2_depts = [
    {
        name: 'accounting',
        children: [
            {
                name: 'accounting payable', 
                children: []
            },{
                name: 'accounting receivable',
                children: [
                    {
                        name: 'cash',
                        children: []
                    },{
                        name: 'check',
                        children: []
                    }
                ]
            }
        ]
    },{
        name: 'finance',
        children:[
            {
                name:'investment',
                children: []
            }
        ]
    }
]

function PrintDepts(depts, element){
    if( !depts || !depts.length)
        return;
    var len = depts.length;
    var ul = document.createElement('ul');
    ul.id = "list";
    
    for(var i = 0; i < len ; i++) {
        var li = document.createElement('li');
        li.innerText = (depts[i].name);
        ul.appendChild(li);
        PrintDepts(depts[i].children, li);
    }
    element.appendChild(ul);
}
PrintDepts(org1_depts, document.getElementById('org1'));
PrintDepts(org2_depts, document.getElementById('org2'));