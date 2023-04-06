interface ICreateSpecificationDTO {
	name: string;
	description: string;
}

interface ISpecificationRepository {
	create({ name, description }: ICreateSpecificationDTO): void;
}

export { ICreateSpecificationDTO, ISpecificationRepository };
