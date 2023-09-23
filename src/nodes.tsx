

function create_library(nb_title: number){
    var tmp = [];
    for (let i = 0; i < nb_title; i++) {
        const node = {
            id: `${i}`,
            data: { label: `Title ${i}` },
            position: { x: 500, y: 100 },
        };
        tmp.push(node);
    }
    return tmp;
}

const node_library = create_library(10);

export default node_library;
