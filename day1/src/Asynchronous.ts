{


    //getTodo
    const getTodo = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = res.json();
        return data;
    };
    


    //promise

    type Something = { something: string}

    const createPromise = (): Promise<Something> =>{
        return new Promise<Something>((resolve, reject) =>{
            const data:Something = {something:'Something'};
            if(data){
                resolve(data);
            }else{
                reject('Failed to fetch');
            }
        })
    }

    //calling promise
    const callPromise = async () : Promise<Something> =>{
        const data :Something = await createPromise();
        // console.log(data);
        return data
    }
    callPromise();


    //from conceptual

    interface GG {
        id:number;
        title:string;
        body:string;
    }

    const fetchData = async () : Promise<GG[]> =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = res.json();
        return data;
    }

    const show = async() =>{
        const result = await fetchData();
        console.log(result);
    }
    show();












}