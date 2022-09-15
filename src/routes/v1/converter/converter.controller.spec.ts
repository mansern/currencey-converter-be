import { Test, TestingModule } from "@nestjs/testing";
import { ConverterController } from "./converter.controller";
import { ConverterService } from "./converter.service";

describe("ConverterController", () => {
  let converterController: ConverterController;
  let converterService: ConverterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConverterController],
      providers: [ConverterService],
    }).compile();

    converterController = module.get<ConverterController>(ConverterController);
  });

  describe("currenyCodes", () => {
    it("should return an array of curreny codes having length 149", async () => {
      expect(await converterController.currenyCodes()).toHaveLength(149);
    });
  });

  describe("calculateConversion", () => {
    it("should return converted amount from AUD", async () => {
      expect(await converterController.calculateConversion(1, "PKR")).toEqual(
        159.41
      );
    });
  });
});
