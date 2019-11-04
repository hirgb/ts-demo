interface Person {
    name: string
    age?: number
}

function hello(p: Person): void {
    console.log(p.name)
}

hello({name: 'zhangkefei'})
