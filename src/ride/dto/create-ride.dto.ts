import { IsDate, IsInt, IsString } from "class-validator"

export class CreateRideDto {
  @IsString()
  driverId:string;
  @IsString()
  origin:string;
  @IsString()
  destination:string;
  @IsDate()
  date:Date;
  @IsString()
  time:string;
  @IsInt()
  seats:number;
  @IsInt()
  availableSeats:number;
}
