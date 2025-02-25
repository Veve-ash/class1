import { IsNotEmpty, IsNumber, IsString, IsEmail } from "class-validator"

export class UserDto{
    @IsNotEmpty()
    @IsString()
    name: string
    
    @IsNotEmpty()
    @IsNumber()
    age: number

    @IsNotEmpty()
    @IsEmail()
    email: string
}