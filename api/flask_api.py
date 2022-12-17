from flask import Flask
from flask_restful import Resource, Api, reqparse, abort
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
import json
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
api = Api(app)



# # DATABASE
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydb.db"
# db = SQLAlchemy(app)

# class DataModel(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     path = db.Column(db.String(200))
#     type = db.Column(db.String(200))
# # with app.app_context():
# #     db.create_all()

def read_data(datafile):
    with open(datafile, 'r') as infile:
        data = json.load(infile) 
        print(data)
        return data

read_data('OverStats/api/game-stats.json')


class Match(Resource):

    def get(self, mid):
        data = read_data('OverStats/api/game-stats.json')
        return data['games'][str(mid)]

class Matches(Resource):

    def get(self):
        data = read_data('OverStats/api/game-stats.json')
        return data['games']
        

# api.add_resource(Match, '/match')
api.add_resource(Match, '/match/<int:mid>')
api.add_resource(Matches, '/matches')


if __name__ == "__main__":
    app.run(port=8000, debug=True)

        


# class Data(Resource):

#     def get(self, did):
#         return example_data[did]

#     def post(self, did):
#         parser = reqparse.RequestParser()
#         parser.add_argument('Path', required=True, type=str)
#         parser.add_argument('type', required=True, type=str)

#         args = parser.parse_args()

#         if did in example_data:
#             abort(409, "Id already taken")
#         else:
#             example_data[did] = {"path": args["path"], "type": args["type"]}
#             return example_data[did]




# class Preprocess(Resource):

#     def get(self):
#         data = pd.read_csv(datafile)
#         data = data.to_dict()
        
#         return {'data': data}, 200

#     def post(self):
#         parser = reqparse.ReqParser()
#         info = parser.add_argument('info')

# class Analyse(Resource):

#     def get(self, channel_name):
#         preprocess = Preprocess(FILENAME)
#         clean_data = preprocess.clean_data(quick_clean=True)

#         analysis = Analysis(clean_data)
#         data, time = analysis.extract(channel_list=[channel_name])

#         dominant_frequencies = analysis.data_sort(data, time)

#         return {
#             'Results': dominant_frequencies
#         }, 200



    # def post(self, channel_name):
    #     parser = reqparse.RequestParser()
    #     parser.add_argument('filename', required=True, type=str)
    #     parser.add_argument('preprocess', required=True, type=dict)
    #     parser.add_argument('analyse', required=True, type=dict)

    #     args = parser.parse_args()

    #     # print(args['preprocess']['filter'])
    #     filename = args['filename']
    #     preprocess_settings = args['preprocess']
    #     analysis_settings = args['analyse']

    #     preprocess = Preprocess(filename)

    #     function_dict = {
    #         'filter': preprocess.filter,
    #         'ica': preprocess.ica,
    #         'manual_ica': preprocess.manual_ica,
    #         'ica_filter': preprocess.ica_filter,
    #         'clean_data': preprocess.clean_data
    #     }

    #     checkpoints = {}

    #     for func in preprocess_settings:
    #         if preprocess_settings[func]['enable'] == True:
    #             print(f'[PREPARING FUNCTION]: {func}')
    #             print(f"[LOADING PARAMS]: {preprocess_settings[func]['params']}")
    #             arg = preprocess_settings[func]['params']['args']
    #             kwarg = preprocess_settings[func]['params']['kwargs']
    #             clean_data = function_dict[func](*arg, **kwarg)
    #             if func not in checkpoints:
    #                 checkpoints[func] = clean_data
        
    #     # not saving each one as a new checkpoint just saving last data to all keys in dict
    #     print(checkpoints)
    #     print(list(checkpoints.keys())[-1])
    #     for i in checkpoints:
    #         print(checkpoints[i].info)
                

    #     return {
    #         'preprocess_settings': args['preprocess'],
    #         'analysis_settings': args['analyse']
    #     }, 200



# api.add_resource(Preprocess, '/preprocess')
# api.add_resource(Analyse, '/analyse/<string:channel_name>')
# api.add_resource(Data, '/data/<int:did>')
# api.add_resource(ExampleData, '/data')


