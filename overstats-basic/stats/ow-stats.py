import json
import matplotlib.pyplot as plt

def base_plot(hero_data):
    plt.bar([data['hero'] for data in hero_data],
             [data['value'] for data in hero_data])
    plt.show()


def read_data(datafile):
    with open(datafile, 'r') as infile:
        data = json.load(infile)
        # for i in data['heroes_comparisons']:
            # print[i]
        return data

# read_data('./stats/hero-stats.json')

def get_time_played(data, plot=False):
    values = data['heroes_comparisons']['time_played']['values']
    print(values)
   
    if plot:
        base_plot(values)

get_time_played(read_data('./stats/hero-stats.json'), plot=True)


