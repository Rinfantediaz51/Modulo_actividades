import { Injectable } from '@nestjs/common';
@Injectable()
export class DescripcionesService {
private descripciones: any[] = [];
findOne(id: number): string {
return `Get descripciones with id ${id}`;
}
findAll(): string {
return 'Get all descripciones';
}
create(createDescripcionesDto): string {
this.descripciones.push(createDescripcionesDto);
return 'Descripciones created successfully';
}
update(id, updateDescripcines): string {
return 'Descripciones updated successfully';
}
delete(id): string {
return 'Descripciones deleted successfully';
}
}