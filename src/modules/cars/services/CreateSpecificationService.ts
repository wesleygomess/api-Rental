import { ISpecificationRepository } from "../Repositories/ISpecificationRepository";

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificationService {
	constructor(private specificationRepository: ISpecificationRepository) {}

	execute({ name, description }: IRequest): void {
		this.specificationRepository.create({ name, description });
	}
}

export { CreateSpecificationService };
