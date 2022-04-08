import { Router } from 'express';
import { usersRepository } from '../repositories/users';

const userRoutes = Router();

userRoutes.post('/', (req, res) => {
	const { name, email } = req.body;

	usersRepository.createUser(name, email);

	res.sendStatus(201);
});

userRoutes.get('/', (req, res) => {
	const users = usersRepository.getUsers();

	res.send(`
	<h1>Heelooooow Users!</h1>
	
	<ul>
	${users
		.map(
			user => `
		<li>
			name: ${user.name} email: ${user.email} id: ${user.id} 
		</li>`
		)
		.join('')}
	</ul>
	`);
});

export { userRoutes };
