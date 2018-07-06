select xt.create_table('amznmws-info', 'amznmws', false);

select
	xt.add_column('amznmws-info', 'user', 'TEXT', 'NOT NULL', 'public'),
	xt.add_column('amznmws-info', 'seller-id', 'VARCHAR(14)', 'NOT NULL', 'public'),
	xt.add_column('amznmws-info', 'mws-auth-token', 'VARCHAR', 'NOT NULL', 'public'),
	xt.add_column('amznmws-info', 'mws-access-key', 'VARCHAR', 'NOT NULL', 'public'),
	xt.add_column('amznmws-info', 'secret-key', 'VARCHAR', 'NOT NULL', 'public');

select
	xt.add_constraint('amznmws-info', 'amznmws-info_pkey', 'PRIMARY KEY (user)', 'public'),
	xt.add_constraint('amznmws-info', 'seller-id_key', 'UNIQUE (seller-id, mws-auth-token, mws-access-key, secret-key)');

COMMENT ON TABLE amznmws IS 'Used to store Amazon MWS data';
