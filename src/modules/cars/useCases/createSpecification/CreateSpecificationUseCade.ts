import { ISpecificationRepository } from "../../Repositories/ISpecificationRepository";

interface IRequest {
	name: string;
	description: string;
}
class CreateSpecificationUseCase {
	constructor(private specificationRepository: ISpecificationRepository) {}

	execute({ name, description }: IRequest): void {
		const specificationsAlredyExists =
			this.specificationRepository.findByName(name);

		if (specificationsAlredyExists) {
			throw new Error("Specification  already exists!");
		}

		this.specificationRepository.create({ name, description });
	}
}

export { CreateSpecificationUseCase };
