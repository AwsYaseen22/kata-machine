let dir = [
    [-1,0],
    [1,0],
    [0,-1],
    [0,1],
]

function walk(maze: string[], wall: string, cur: Point, end: Point, seen:boolean[][], path:Point[]): boolean{
    // base case 1: off the map
    if(cur.x<0|| cur.x>=maze[0].length|| cur.y<0|| cur.y>=maze.length){
        return false
    }
    // base case 2: on a wall
    if(maze[cur.y][cur.x] === wall){
        return false
    }
    // base case 3: in the end point
    if(cur.x === end.x && cur.y === end.y){
        path.push(end)
        return true
    }
    // if we see the tile before
    if(seen[cur.y][cur.x]){
        return false
    }

    // recurese
    // Pre recurse
    seen[cur.y][cur.x] = true
    path.push(cur)
    
    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x,y] = dir[i]
        if(walk(maze, wall, {x:cur.x+x, y:cur.y+y}, end, seen, path)){
            return true
        }
    }

    // Post recurse
    path.pop()

    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = []
    const path: Point[] = []
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }
    walk(maze, wall, start,end,seen, path)
    return path
}