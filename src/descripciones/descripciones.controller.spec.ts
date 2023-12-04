import { Test, TestingModule } from '@nestjs/testing';
import { DescripcionesController } from './descripciones.controller';

describe('DescripcionesController', () => {
  let controller: DescripcionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DescripcionesController],
    }).compile();

    controller = module.get<DescripcionesController>(DescripcionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
