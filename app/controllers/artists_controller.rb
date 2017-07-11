class ArtistsController < ApplicationController

  def index
    def api(artist)
      artistSearched =  'http://api.musicgraph.com/api/v2/artist/suggest?api_key=c8303e90962e3a5ebd5a1f260a69b138&prefix='+artist+'&limit=10'
      response = HTTParty.get(artistSearched)
      render json: response.body
    end
    api(params[:artist])
  end

  def create
    @artist = Artist.create!(artist_params)
    render json: @artist
    # redirect_to artist_path(@artist)
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :genre, :nationality, :years_active, :musicgraph_id, :spotify_id)
  end

end
