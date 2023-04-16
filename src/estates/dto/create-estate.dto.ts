//TODO add validator & swagger doc
export class CreateEstateDto {
  readonly rooms: string;
  readonly checkOut: string;
  readonly checkIn: string;
  readonly isRented: boolean;
  readonly address: string;
  readonly isDailyRent: boolean;
  readonly pricePerDay: number;
  readonly pricePerMonth: number;
  readonly floor: number;
  readonly totalArea: number;
  readonly bathRooms: number;
  readonly ownerId: number;
  readonly managerId: number;
}
