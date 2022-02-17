import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class BuyElecDto {
  @IsNotEmpty({ message: 'Meter number is invalid' })
  @IsString({ message: 'Meter should be a number' })
  meter: string;

  @IsNotEmpty({ message: 'Amount is invalid' })
  @IsInt({ message: 'Amount must be a number' })
  ammount: number;
}