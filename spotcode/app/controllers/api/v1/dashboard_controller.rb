class Api::V1::DashboardController < ApplicationController
    def index
        load_recent_heard
    end

    private

    def load_recent_heard
        @recent_albums = current_user.recently_heards.order('created_at DESC').limit(4).map(&:album)
    end

    def load_recommendations
        heard_categories = @recent_albums
    end
end
