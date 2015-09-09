var should = require('should-http'),
	request = require('supertest');

describe('Student', function() {
	var url =  "http://localhost:5000";
	var studrec = {
		'name': 'Nards John',
		'studno': '2014-42641',
	}

	describe('find()', function() {
		it('Should retrieve all student record', function(done) {
			request(url)
			.get('/students')
			.end(function(err, res) {
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			});
		});

	});

	describe('findOne()', function() {
		it('Should retrieve a specific student record', function(done) {
			request(url)
			.get('/students/2')
			.end(function(err, res) {
				if(err) throw err;
				res.should.have.status(200);
				done();
			});
		});

	});

	describe('insert()', function() {
		it('Insert a new student record', function(done) {
			request(url)
			.post('/students')
			.send(studrec)
			.end(function(err, res) {
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object).and.have.properties({
					name: 'Nards John',
    				studno: '2014-42641'
				});
				done();
			});
		});

	});

});