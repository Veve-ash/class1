import { IsNotEmpty, IsNumber, IsString, IsEmail, IsBoolean, IsOptional, MinLength, MaxLength } from "class-validator"

export class UserDto{
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsNumber()
    age: number

    @MaxLength(50, {message: 'Invalid Age!'})
    @MinLength(10, {message: 'Invalid Age!'})
    @IsNotEmpty({message: 'This field is required!'})
    @IsEmail()
    email: string

    @IsNotEmpty({message: 'This field is required!'})
    @IsBoolean()
    areyouhuman: boolean

    @IsOptional()
    height: number
}