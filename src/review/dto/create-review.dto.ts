import { IsInt, IsString } from "class-validator"

export class CreateReviewDto {
  @IsString()
  rideId    : string;
  @IsString()
  reviewerId :string;
  @IsInt()
  rating    : number;
  @IsString()
  comment  :  string;
}
