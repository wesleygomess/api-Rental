import { SpecificationRepository } from "../../Repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCade";

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
	specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
	createSpecificationUseCase
);

export { createSpecificationController };
