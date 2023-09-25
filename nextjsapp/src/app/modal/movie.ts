import * as borsh from '@project-serum/borsh'
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

    serialize(): Buffer {
        const buffer = Buffer.alloc(1000);
        this.borshInstructorSchema.encode({...this , varient: 0} , buffer);
        return buffer.slice(0, this.borshInstructorSchema.getSpan(buffer));
    }
}