import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    title: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @MinLength(1)
    @IsOptional()
    description?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    slug?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    @Min(0)
    stock?: number;

    @IsArray()
    @IsString({ each: true })
    sizes: string[];

    @IsIn(['men', 'women', 'kid', 'unisex'])
    @IsString()
    @MinLength(1)
    gender: string;
}
