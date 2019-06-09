import random
from flask import Flask, render_template,  request, jsonify
import simplejson as json
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow 

# pip install pymysql flask-sqlalchemy flask-marshmallow marshmallow-sqlalchemy

try:
    # Python 2
    xrange
except NameError:
    # Python 3, xrange is now named range
    xrange = range

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:romani@localhost/MyReads' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init db
db = SQLAlchemy(app)

# Init ma
ma = Marshmallow(app)


# Book Class/Model
class Book(db.Model):
	idBook    = db.Column(db.Integer, primary_key=True)
	tittle    = db.Column(db.String(255))
	authours  = db.Column(db.String(255))
	cover_url = db.Column(db.String(255))
	state     = db.Column(db.String(255))

# Book Schema
class BookSchema(ma.Schema):
  class Meta:
    fields = ('idBook', 'tittle', 'authours', 'cover_url', 'state')

# Init schema
book_schema = BookSchema(strict=True)
books_schema = BookSchema(many=True, strict=True)


@app.route('/')
@app.route('/search')
def index():
	return render_template('index.html')

@app.route('/book', methods=['GET']) # take note of this decorator syntax, it's a common pattern
def findAllBooks():
    all_books = Book.query.all()
    result = books_schema.dump(all_books)
    return json.dumps(result.data)
    
@app.route('/book/<idBook>', methods=['PUT']) 
def updateBook(idBook):

	state = request.json['state']
	product = Book.query.get(idBook)
	product.state = state
	db.session.commit()
	return "Ok"    


if __name__ == '__main__':
    app.run(debug=True)
    # app.run(host="0.0.0.0", port="5000", debug=False)
