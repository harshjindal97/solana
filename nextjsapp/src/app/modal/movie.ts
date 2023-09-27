// import * as borsh from '@project-serum/borsh'
const borsh = require('@project-serum/borsh');
export class Movie{
    title: string;
    rating: number;
    description: string;
    constructor(title: string, rating: number, description: string) {
        this.title = title;
        this.rating = rating;
        this.description = description;
    }

    borshInstructorSchema = borsh.struct([
        borsh.u8('varient'),
        borsh.str('title'),
        borsh.u8('rating'),
        borsh.str('description')
    ])

    static borshAccountSchema = borsh.struct([
        borsh.bool('intialized'),
        borsh.u8('rating'),
        borsh.str('title'),
        borsh.str('description')
    ]);

    static deserialize(buffer?: Buffer): Movie|null {
        
        try {
            const { title, rating, description } = this.borshAccountSchema.decode(buffer)
            return new Movie(title, rating, description)
          } catch(error) {
            console.log('Deserialization error:', error)
            return null
          }
    }

    serialize(): Buffer {
        const buffer = Buffer.alloc(1000);
        this.borshInstructorSchema.encode({...this , varient: 0} , buffer);
        // console.log(this);
        return buffer.slice(0, this.borshInstructorSchema.getSpan(buffer));
    }
}

// const movie = new Movie("harsh" , 2 , "movie");
// // console.log(movie);
// console.log(movie.serialize());